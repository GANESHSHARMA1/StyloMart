from django.http import JsonResponse

def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Perform signup logic, e.g., create user in the database

        return JsonResponse({'message': 'Signup successful'})

    return JsonResponse({'message': 'Invalid request method'}, status=400)

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Perform login logic, e.g., validate user credentials

        return JsonResponse({'message': 'Login successful'})

    return JsonResponse({'message': 'Invalid request method'}, status=400)
