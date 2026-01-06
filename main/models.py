from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    link = models.URLField(blank=True)
    technologies = models.CharField(max_length=200, blank=True, help_text="Comma-separated, e.g., HTML,CSS,JS")

    def __str__(self):
        return self.title

    @property
    def tech_list(self):
        """Return list of technologies for template."""
        return [tech.strip() for tech in self.technologies.split(',') if tech.strip()]