import { ThemeContext, ThemeProvider} from "./themeContext/ThemeContext"
import { useContext, useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Stats } from "./components/Stats"
import { Alt } from "./components/Alt"
import { Client } from "./components/Client"
import { Testimonials } from "./components/Testimonials"
import { Service } from "./components/Service"
import { Action } from "./components/Action"
import { Team } from "./components/Team"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import Aos from "aos"
import 'aos/dist/aos.css'

const AppFunctions = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)
  const body = document.body
  // Utility function to select elements
  const select = (selector, all = false) => 
    all ? document.querySelectorAll(selector) : document.querySelector(selector)
  
  useEffect(() => {  
    const mobileNavToggleBtn = select(".mobile-nav-toggle")
    const navLinks = select("#navmenu a", true)
    const navMenuLinks = select(".navmenu a", true)
    const scrollTop = select('.scroll-top')
    
    // Apply .scrolled class to body when scrolling
    const toggleScrolled = () => {
      const body = select("body")
      const header = select("#header")
      if (
        header &&
        ( header.classList.contains("scroll-up-sticky") ||
          header.classList.contains("sticky-top") ||
          header.classList.contains("fixed-top") )
            
      ) {
        window.scrollY > 100
        ? body.classList.add("scrolled")
        : body.classList.remove("scrolled")
      }
    }
    /**
     * Mobile nav toggle
     */
    
    const toggleMobileNav = () => {
      body.classList.toggle("mobile-nav-active")
      mobileNavToggleBtn?.classList.toggle("bi-list")
      mobileNavToggleBtn?.classList.toggle("bi-x")
      console.log("Toggled mobile-nav-active:", 
        body.classList.contains("mobile-nav-active"))
    }
    mobileNavToggleBtn?.addEventListener("click", () => {
      console.log("Mobile nav toggle clicked") // Debugging step
      toggleMobileNav()
    })
    /**
     * Hide mobile nav on same-page/hash links
     */
    
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (body.classList.contains("mobile-nav-active")) {
          toggleMobileNav();
        }
      })
    )
    // Cleanup event listeners on component unmount
    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", toggleMobileNav)
      }
      navLinks.forEach((link) =>
        link.removeEventListener("click", toggleMobileNav)
      )

    /**
     * Toggle mobile nav dropdowns
     */
    select('.navmenu .toggle-dropdown', true).forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active')
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active')
        e.stopImmediatePropagation()
      })
    })
    /**
     * Preloader
     */
    const handlePreloader = () => {
      const preloader = select("#preloader");
      if (preloader) {
        preloader.remove();
      }
    };

    /**
     * Scroll top button
     */
    const toggleScrollTop = () => {
      const scrollTop = select('.scroll-top')
      if (scrollTop) {
        if (window.scrollY > 200) {
          scrollTop.classList.add('active')
        } else {
          scrollTop.classList.remove('active')
        }
      }
    }
    // Scroll to top button functionality
   
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function() {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          setTimeout(() => {
            let section = select(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });

    /**
     * Navmenu Scrollspy
     */
    const navmenuScrollspy = () => {
      navMenuLinks.forEach((link) => {
        if (!link.hash) return;
        const section = select(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
            select(".navmenu a.active", true)
            .forEach((activeLink) => activeLink.classList.remove("active"))
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        })
      }

      window.addEventListener("scroll", toggleScrolled)
      window.addEventListener("scroll", toggleScrollTop )
      window.addEventListener("scroll", navmenuScrollspy)
      window.addEventListener("load", handlePreloader)
      Aos.init({ duration: 600, easing: "ease-in-out"})
            
      setLoading(false);
                
      return () => {
        window.removeEventListener("scroll", toggleScrolled)
        window.removeEventListener("scroll", toggleScrollTop )
        window.removeEventListener("scroll", navmenuScrollspy)
        window.removeEventListener("load", handlePreloader)
      }
    }, [body.classList])
        
  if (loading) {
    return (
      <div className="loading">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    )
  }
  
  return (
    <div className= {isDarkMode ? 'dark' : 'light' }>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="main">
          <Hero />
          <About />
          <Projects />
          <Client />
          <Stats isDarkMode={isDarkMode} />
          <Alt />
          <Testimonials />
          <Service isDarkMode={isDarkMode} />
          <Action />
          <Team isDarkMode={isDarkMode} />
          <Contact />
        </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
export const App = () => (
  <ThemeProvider>
    <AppFunctions />
  </ThemeProvider>
)
