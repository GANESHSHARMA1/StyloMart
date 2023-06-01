from flask import Flask, request, send_file, jsonify
import cv2 as cv
import numpy as np
from flask import Flask, request, send_file, jsonify
import cv2 as cv
import numpy as np
import os
import VariablesMod as vm
import mediapipe as mp
togglecounter=peoplecounter =uppercounter = capcounter =0

app = Flask(__name__)


mp_pose = mp.solutions.pose
@app.route('/api/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file found'}), 400

    image_file = request.files['image']
    imgfile = image_file
    # Process the image file here
    processed_image = process_image(image_file)

    # Convert processed image to bytes
    _, processed_image_bytes = cv.imencode('.jpg', processed_image)

    # Return the processed image as a response
    return send_file(
        processed_image_bytes,
        mimetype='image/jpeg',
        as_attachment=True,
        attachment_filename='processed_image.jpg'
    )


def process_image(image_file):

    img = cv.imdecode(np.frombuffer(image_file.read(), np.uint8), cv.IMREAD_COLOR)

    vm.currlev2 = vm.Lev2[1]
    vm.currlev3 = vm.Lev3[1]
    vm.currlev4 = vm.Lev4[1]
    mainpathupperWomen = os.path.join(vm.maindir, vm.currlev2, vm.currlev3, vm.currlev4)

    vm.currlev2 = vm.Lev2[0]
    vm.currlev3 = vm.Lev3[1]
    vm.currlev4 = vm.Lev4[1]
    mainpathupperMen = os.path.join(vm.maindir, vm.currlev2, vm.currlev3, vm.currlev4)
    if not togglecounter:
        mainpathupper = mainpathupperWomen

    vm.uppercloth = os.listdir(mainpathupper)
    img = cv.imread('People\\' + imgfile[peoplecounter])

    imgRGB = cv.cvtColor(img, cv.COLOR_BGR2RGB)

    with mp_pose.Pose(static_image_mode=True) as pose:
        results = pose.process(imgRGB)
        if results.pose_landmarks:
            lm9 = (int(results.pose_landmarks.landmark[9].x * img.shape[1]),
                   int(results.pose_landmarks.landmark[9].y * img.shape[0]))
            lm10 = (int(results.pose_landmarks.landmark[10].x * img.shape[1]),
                    int(results.pose_landmarks.landmark[10].y * img.shape[0]))
            lm4 = (int(results.pose_landmarks.landmark[4].x * img.shape[1]),
                   int(results.pose_landmarks.landmark[4].y * img.shape[0]))
            lm1 = (int(results.pose_landmarks.landmark[1].x * img.shape[1]),
                   int(results.pose_landmarks.landmark[1].y * img.shape[0]))
            imgofshirt = cv.imread(mainpathupper + '\\' + vm.uppercloth[uppercounter], cv.IMREAD_UNCHANGED)
            pathforcaps = 'Clothes\\Other Wearables\\Caps'
            cap = os.listdir(pathforcaps)
            imgofcap = cv.imread(pathforcaps + '\\' + cap[capcounter], cv.IMREAD_UNCHANGED)

            shoulder_width1 = int(abs(lm9[0] - lm10[0]) * 3.7)
            shoulder_width2 = int(abs(lm1[0] - lm4[0]) * 1.7)

            shirt_height = int(shoulder_width1 * 3.5)
            shirt_width = int(shirt_height * (imgofshirt.shape[1] / imgofshirt.shape[0]))

            cap_height = int(shoulder_width2 * 1.6)
            cap_width = int(cap_height * (imgofcap.shape[1] / imgofcap.shape[0]))

            shirt_x1 = int(lm9[0] - shirt_width // 2) - 4
            shirt_y1 = int(lm9[1]) + 15
            shirt_x2 = shirt_x1 + shirt_width
            shirt_y2 = shirt_y1 + shirt_height

            shirt_x1 = max(0, shirt_x1)
            shirt_y1 = max(0, shirt_y1)
            shirt_x2 = min(img.shape[1], shirt_x2)
            shirt_y2 = min(img.shape[0], shirt_y2)

            cap_x1 = int(lm9[0] - cap_width // 2) - 6
            cap_y1 = int(lm9[1]) - 70
            cap_x2 = cap_x1 + cap_width
            cap_y2 = cap_y1 + cap_height

            cap_x1 = max(0, cap_x1)
            cap_y1 = max(0, cap_y1)
            cap_x2 = min(img.shape[1], cap_x2)
            cap_y2 = min(img.shape[0], cap_y2)

            imgofshirt = cv.resize(imgofshirt, (shirt_x2 - shirt_x1, shirt_y2 - shirt_y1))
            imgofcap = cv.resize(imgofcap, (cap_x2 - cap_x1, cap_y2 - cap_y1))

            alpha = imgofshirt[:, :, 3] / 255.0
            blended_img = img.copy()
            blended_img[shirt_y1:shirt_y2, shirt_x1:shirt_x2] = (1 - alpha[:, :, np.newaxis]) * blended_img[
                                                                                                shirt_y1:shirt_y2,
                                                                                                shirt_x1:shirt_x2] + alpha[
                                                                                                                     :,
                                                                                                                     :,
                                                                                                                     np.newaxis] * imgofshirt[
                                                                                                                                   :,
                                                                                                                                   :,
                                                                                                                                   :3]

            img = blended_img
            alpha = imgofcap[:, :, 3] / 255.0
            blended_img = img.copy()
            blended_img[cap_y1:cap_y2, cap_x1:cap_x2] = (1 - alpha[:, :, np.newaxis]) * blended_img[
                                                                                        cap_y1:cap_y2,
                                                                                        cap_x1:cap_x2] + alpha[
                                                                                                         :,
                                                                                                         :,
                                                                                                         np.newaxis] * imgofcap[
                                                                                                                       :,
                                                                                                                       :,
                                                                                                                       :3]

            img = blended_img
            image_file=img

    return image_file


if __name__ == '_main_':
    app.run()