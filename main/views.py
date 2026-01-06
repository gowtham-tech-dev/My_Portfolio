from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm
from .models import Project
from django.contrib import messages

   

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')


def projects(request):
    projects = Project.objects.all()
    return render(request, 'projects.html', {'projects': projects})


def contact(request):
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save to database
            form.save()

            # Send email
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

             # Send email to the user
            send_mail(
                subject=f"Thank you for contacting me, {name}",
                message=f"Hi {name},\n\nThank you for your message:\n\n\"{message}\"\n\nI will get back to you soon!",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email], 
                fail_silently=False,
            )
            
             # Send a copy to myself 
            send_mail(
                subject=f"New Contact Message from {name},contact them by {email}",
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
                fail_silently=False,
            )
            # Show success message
            messages.success(request, 'Your message has been sent successfully!')

            # Clear the form
            form = ContactForm()
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})

