// Get all `<a>` tags inside `<li>` elements
const menuLinks = document.querySelectorAll('.sidebar ul li a');
const title = ["Overview", "Transaction", "Accounts", "Investment", "Credit Card", "Loans", "Services", "Setting"];
const changetitle = document.querySelector(".topbar .page-title");
const mainSections = document.querySelectorAll(".main div"); // Get all sections

// Loop through each link and add a click event listener 
menuLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Remove 'active' class from all links & hide all main sections
        menuLinks.forEach(el => el.classList.remove('active'));
        mainSections.forEach(section => {
            section.classList.remove('active-side');
            section.style.display = "none";
        });
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
        
        // Show the corresponding section (assuming IDs match)
        const targetId = this.id; // Removes the '#'
        const targetSection = document.querySelector(` .main #${targetId}`);
        console.log(targetSection);
        if (targetSection) {
            targetSection.style.setProperty('display', 'block', 'important'); // or "flex", "grid", etc.
            
              // 2. Remove any display:none from children while preserving their natural display
            const children = targetSection.querySelectorAll('*[style*="display: none"]');
            children.forEach(child => {
                child.style.removeProperty('display'); // Lets CSS cascade determine display
            });

            targetSection.classList.add('active-side');
        }
        
        // Update the title based on the clicked index
        changetitle.textContent = title[index];
        changetitle.setAttribute("data-title","title")
        
    });
});



const menuLink = document.querySelectorAll('.Setting ul li a');
const setting = document.querySelectorAll('.Setting .settings div')
// Loop through each link and add a click event listener 
menuLink.forEach( (links ) => {
    links.addEventListener('click', function(e) {
        // Prevent default anchor behavior (optional)
        e.preventDefault();
        
        // Remove 'active' class from all links
        menuLink.forEach(el => el.classList.remove('active'));
        setting.forEach(section => {
            section.classList.remove('active-settings');
            section.style.display = "none";
        });
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
        
        
        const targetIdsetting = this.id; 
        const targetSectionsetting = document.querySelector(` .settings #${targetIdsetting}`);
        console.log(targetSectionsetting);
        if (targetSectionsetting) {
            targetSectionsetting.style.setProperty('display', 'block', 'important'); // or "flex", "grid", etc.
            
              // 2. Remove any display:none from children while preserving their natural display
            const childrensetting = targetSectionsetting.querySelectorAll('*[style*="display: none"]');
            childrensetting.forEach(child => {
                child.style.removeProperty('display'); // Lets CSS cascade determine display
            });

            targetSectionsetting.classList.add('active-setting');
        }
    });
});
