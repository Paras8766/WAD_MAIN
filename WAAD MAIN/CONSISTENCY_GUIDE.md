# jQuery Mobile Consistency Guide (W22-W26)

## Standard Structure for ALL Projects

Every project must follow this exact jQuery Mobile structure:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Project Title</title>
    
    <!-- jQuery Mobile CSS -->
    <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    
    <!-- jQuery Mobile JS -->
    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- PAGE 1 -->
<div data-role="page" id="page1">
    
    <!-- HEADER (Fixed at top) -->
    <div data-role="header" data-position="fixed">
        <h1>Project Name</h1>
        
        <!-- NAVBAR (Navigation Links) -->
        <div data-role="navbar">
            <ul>
                <li><a href="#page1" class="ui-btn-active">Link 1</a></li>
                <li><a href="#page2">Link 2</a></li>
                <li><a href="#page3">Link 3</a></li>
            </ul>
        </div>
    </div>

    <!-- MAIN CONTENT -->
    <div role="main" class="ui-content">
        <h2>Welcome</h2>
        <p>Your content here</p>
        
        <!-- COLLAPSIBLE SECTION -->
        <div data-role="collapsible" data-collapsed="true">
            <h3>Click to expand</h3>
            <p>Hidden content appears here</p>
        </div>
    </div>

    <!-- FOOTER (Fixed at bottom) -->
    <div data-role="footer" data-position="fixed">
        <h4>© 2024 Project</h4>
    </div>
</div>

<!-- PAGE 2 -->
<div data-role="page" id="page2">
    <div data-role="header" data-position="fixed">
        <h1>Project Name</h1>
        <div data-role="navbar">
            <ul>
                <li><a href="#page1">Link 1</a></li>
                <li><a href="#page2" class="ui-btn-active">Link 2</a></li>
                <li><a href="#page3">Link 3</a></li>
            </ul>
        </div>
    </div>
    
    <div role="main" class="ui-content">
        <h2>Page 2 Content</h2>
        <p>Your content here</p>
    </div>
    
    <div data-role="footer" data-position="fixed">
        <h4>© 2024 Project</h4>
    </div>
</div>

</body>
</html>
```

---

## Key jQuery Mobile Elements

### 1. **Header with Navbar**
```html
<div data-role="header" data-position="fixed">
    <h1>Title</h1>
    <div data-role="navbar">
        <ul>
            <li><a href="#page1">Page 1</a></li>
            <li><a href="#page2">Page 2</a></li>
        </ul>
    </div>
</div>
```
- `data-role="header"` = Top bar
- `data-position="fixed"` = Stays at top while scrolling
- `data-role="navbar"` = Navigation bar
- `class="ui-btn-active"` = Mark current page

### 2. **Main Content**
```html
<div role="main" class="ui-content">
    <p>Content goes here</p>
</div>
```

### 3. **Collapsible Sections** (like accordion)
```html
<div data-role="collapsible" data-collapsed="true">
    <h3>Click me</h3>
    <p>Hidden content</p>
</div>
```
- `data-collapsed="true"` = Starts closed
- `data-collapsed="false"` = Starts open

### 4. **Page Transitions** (Smooth animations)
```html
<a href="#page2" data-transition="fade">Go to Page 2</a>
```
Available transitions: `fade`, `slide`, `pop`, `flip`, `turn`, `flow`, `slidefade`, `slideup`, `slidedown`

### 5. **Footer**
```html
<div data-role="footer" data-position="fixed">
    <h4>Footer text</h4>
</div>
```

---

## Project-Specific Guidance

### W22: College Website (PICT)
- **Pages:** Home, About Us, Courses, Departments, Contact
- **Use collapsibles** for departments and courses

### W23: Student Clubs
- **Pages:** Home (list of clubs), Individual club pages
- **Use collapsibles** for achievements and descriptions

### W24: Movie Reviews
- **Pages:** Home (movie list), Individual movie pages
- **Use collapsibles** for detailed review and summary

### W25: Personal Portfolio
- **Pages:** Home, About Me, Projects, Skills, Contact
- **Use collapsibles** for project details

### W26: Course Structure
- **Pages:** Home, FE, SE, TE, BE (Year pages)
- **Use collapsibles** for each year to show subjects

---

## CSS Template (style.css)

```css
/* General */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
}

/* Header */
.ui-header {
    background-color: #2196F3 !important;
    color: white !important;
}

.ui-header h1 {
    color: white !important;
}

/* Navbar Links */
.ui-navbar a {
    color: white !important;
}

.ui-navbar a.ui-btn-active {
    background-color: #1976D2 !important;
    color: white !important;
}

/* Main Content */
.ui-content {
    background-color: white;
    padding: 15px;
}

/* Collapsible */
.ui-collapsible {
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.ui-collapsible-heading {
    background-color: #f0f0f0;
    padding: 10px;
    cursor: pointer;
}

.ui-collapsible-content {
    padding: 10px;
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}

/* Footer */
.ui-footer {
    background-color: #333 !important;
    color: white !important;
    text-align: center;
}
```

---

## How to Apply This to All Projects

1. **Copy this HTML structure** to each project's index.html
2. **Modify:**
   - Title
   - Page names in navbar
   - Page IDs
   - Content inside each page
3. **Use the CSS template** for style.css in all projects
4. **Follow collapsible pattern** for grouped content

---

## Example: W23 (Clubs) Using Template

```html
<!-- PAGE: Home (List all clubs) -->
<div data-role="page" id="home">
    <div data-role="header" data-position="fixed">
        <h1>PICT Clubs</h1>
        <div data-role="navbar">
            <ul>
                <li><a href="#home" class="ui-btn-active">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </div>
    
    <div role="main" class="ui-content">
        <h2>Student Clubs</h2>
        
        <!-- ACM Club -->
        <div data-role="collapsible" data-collapsed="true">
            <h3>ACM Club</h3>
            <p><b>Description:</b> Competitive programming</p>
            <p><b>Achievements:</b> Won hackathon 2024</p>
            <img src="acm.jpg" alt="ACM">
        </div>
        
        <!-- IEEE Club -->
        <div data-role="collapsible" data-collapsed="true">
            <h3>IEEE Club</h3>
            <p><b>Description:</b> Electronics & IoT</p>
            <p><b>Achievements:</b> Built robot</p>
            <img src="ieee.jpg" alt="IEEE">
        </div>
    </div>
    
    <div data-role="footer" data-position="fixed">
        <h4>© 2024 PICT</h4>
    </div>
</div>
```

---

## Important: Always Include

1. ✅ `<meta name="viewport" ...>` - For mobile responsiveness
2. ✅ jQuery CDN links (jQuery + jQuery Mobile)
3. ✅ `data-role="page"` on each page div
4. ✅ Header with navbar on each page
5. ✅ `data-position="fixed"` on header/footer
6. ✅ Collapsible sections for grouped content
7. ✅ Consistent CSS file

---

## Result

- **All projects look similar** ✓
- **Easy to learn once, apply 5 times** ✓
- **Perfect for exam prep** ✓
- **Professional mobile design** ✓
