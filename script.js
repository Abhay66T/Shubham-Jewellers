// Add a simple shadow to navbar when scrolling down
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    } else {
                            navbar.style.boxShadow = 'none';
                                }
                                });

                                // Handle Contact Form Submission
                                document.getElementById('contactForm').addEventListener('submit', function(e) {
                                    e.preventDefault(); // Prevents the page from reloading
                                        
                                            // Get values
                                                const name = document.getElementById('name').value;
                                                    const phone = document.getElementById('phone').value;
                                                        const message = document.getElementById('message').value;

                                                            // Create a WhatsApp message link dynamically
                                                                const whatsappNumber = "918840421235"; 
                                                                    const whatsappMessage = `Hello Shubham Jewellers!%0A%0AMy name is ${name}.%0APhone: ${phone}%0A%0A${message}`;
                                                                        
                                                                            // Redirect user to WhatsApp
                                                                                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
                                                                                    window.open(whatsappURL, '_blank');
                                                                                        
                                                                                            // Clear form
                                                                                                this.reset();
                                                                                                });
                                                                                                