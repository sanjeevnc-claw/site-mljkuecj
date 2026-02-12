export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramya Gopinath - Art Entrepreneur</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #5a5a5a;
            background: linear-gradient(135deg, #f8f4f0 0%, #faf7f3 100%);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: rgba(245, 238, 235, 0.9);
            backdrop-filter: blur(10px);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #d4a574;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #7a7a7a;
            transition: color 0.3s;
            font-weight: 500;
        }
        
        .nav-links a:hover {
            color: #d4a574;
        }
        
        .hero {
            padding: 120px 0 80px;
            text-align: center;
            background: linear-gradient(135deg, #f5eeeb 0%, #f0e6e1 100%);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            color: #d4a574;
            margin-bottom: 1rem;
            font-weight: 300;
        }
        
        .hero p {
            font-size: 1.3rem;
            color: #8a8a8a;
            max-width: 600px;
            margin: 0 auto 2rem;
        }
        
        .cta-button {
            display: inline-block;
            padding: 15px 35px;
            background: #d4a574;
            color: white;
            text-decoration: none;
            border-radius: 30px;
            transition: all 0.3s;
            font-weight: 500;
        }
        
        .cta-button:hover {
            background: #c19660;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(212, 165, 116, 0.3);
        }
        
        .section {
            padding: 80px 0;
        }
        
        .section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #d4a574;
            margin-bottom: 3rem;
            font-weight: 300;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
        }
        
        .about-image {
            text-align: center;
        }
        
        .about-image img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            border: 8px solid #e8ddd8;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .portfolio-item {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .portfolio-item:hover {
            transform: translateY(-10px);
        }
        
        .portfolio-item img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        
        .portfolio-item-content {
            padding: 1.5rem;
        }
        
        .portfolio-item h3 {
            color: #d4a574;
            margin-bottom: 0.5rem;
        }
        
        .contact {
            background: #f5eeeb;
            text-align: center;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        
        .contact-item i {
            font-size: 2rem;
            color: #d4a574;
        }
        
        footer {
            background: #d4a574;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }
        
        .placeholder-image {
            background: linear-gradient(135deg, #e8ddd8, #d4c4b8);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8a7a6a;
            font-style: italic;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">Ramya Gopinath</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h1>Art Entrepreneur</h1>
            <p>Bringing personalities to life through mixed-style portraits that capture the essence of every individual</p>
            <a href="#portfolio" class="cta-button">View My Work</a>
        </div>
    </section>

    <section id="about" class="section">
        <div class="container">
            <h2>About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Hello, I'm Ramya Gopinath, a passionate portrait artist who specializes in creating unique, mixed-style portraits that blend realism with artistic interpretation.</p>
                    
                    <p>My work focuses on capturing not just the physical likeness, but the personality and spirit of my subjects. Whether working in traditional mediums or exploring contemporary techniques, I strive to create portraits that tell a story and evoke emotion.</p>
                    
                    <p>Each commission is a collaborative journey where I work closely with my clients to ensure their vision comes to life in a way that exceeds their expectations.</p>
                </div>
                <div class="about-image">
                    <div class="placeholder-image" style="width: 300px; height: 300px; border-radius: 50%; border: 8px solid #e8ddd8; box-shadow: 0 15px 40px rgba(0,0,0,0.1); margin: 0 auto;">
                        Your Portrait Photo
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" class="section">
        <div class="container">
            <h2>Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 1
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Contemporary Portrait</h3>
                        <p>Mixed media on canvas, combining realistic features with stylized elements</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 2
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Family Portrait</h3>
                        <p>Capturing the warmth and connection between loved ones</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 3
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Character Study</h3>
                        <p>Exploring personality through expressive mixed-style technique</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 4
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Pet Portrait</h3>
                        <p>Bringing beloved companions to life with artistic flair</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 5
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Professional Portrait</h3>
                        <p>Elegant and sophisticated portraits for professional use</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="placeholder-image" style="height: 250px;">
                        Portrait Sample 6
                    </div>
                    <div class="portfolio-item-content">
                        <h3>Artistic Interpretation</h3>
                        <p>Bold, creative approach to traditional portraiture</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section contact">
        <div class="container">
            <h2>Let's Create Together</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Ready to commission your unique portrait? I'd love to discuss your vision and bring it to life.</p>
            
            <div class="contact-info">
                <div class="contact-item">
                    <div style="font-size: 2rem; color: #d4a574;">📧</div>
                    <strong>Email</strong>
                    <span>ramya.gopinath@email.com</span>
                </div>
                
                <div class="contact-item">
                    <div style="font-size: 2rem; color: #d4a574;">📱</div>
                    <strong>Phone</strong>
                    <span>+1 (555) 123-4567</span>
                </div>
                
                <div class="contact-item">
                    <div style="font-size: 2rem; color: #d4a574;">📍</div>
                    <strong>Studio</strong>
                    <span>Available for consultations</span>
                </div>
            </div>
            
            <a href="mailto:ramya.gopinath@email.com" class="cta-button" style="margin-top: 2rem;">Get In Touch</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Ramya Gopinath. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>` }} />
  );
}