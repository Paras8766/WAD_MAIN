# Quick Reference: Using the Templates for W22-W26

## Files Created

1. **CONSISTENCY_GUIDE.md** - Complete guide with all concepts explained
2. **W22_TEMPLATE.html** - College website template (About, Courses, Contact)
3. **W23_TEMPLATE.html** - Student clubs template (4-5 clubs with collapsibles)
4. **W24_TEMPLATE.html** - Movie reviews template (5 movies with collapsibles)
5. **W25_TEMPLATE.html** - Portfolio template (About, Projects, Skills, Contact)
6. **W26_TEMPLATE.html** - Course structure template (FE, SE, TE, BE years)
7. **STANDARD_STYLE.css** - Consistent CSS for all projects

---

## How to Use These Templates

### Step 1: Copy the Template
For each project (w22, w23, etc.):
```bash
Copy the appropriate _TEMPLATE.html file
Rename it to index.html
Replace content with your own data
```

### Step 2: Add the CSS
```bash
Copy STANDARD_STYLE.css
Rename it to style.css in each project folder
Link it: <link rel="stylesheet" href="style.css">
```

### Step 3: Customize Content
- Change headings, descriptions
- Update links
- Add your images
- Keep the HTML structure the same

---

## Key Pattern (Same for All Projects)

```html
<!-- MULTIPLE PAGES, EACH WITH SAME STRUCTURE -->
<div data-role="page" id="page-name">
    <div data-role="header" data-position="fixed">
        <h1>Title</h1>
        <div data-role="navbar">
            <!-- Links -->
        </div>
    </div>
    
    <div role="main" class="ui-content">
        <!-- Your content -->
        <div data-role="collapsible">
            <!-- Expandable section -->
        </div>
    </div>
    
    <div data-role="footer" data-position="fixed">
        <!-- Footer -->
    </div>
</div>
```

---

## What's Different in Each Template?

| Project | Pages | Collapsibles | Content |
|---------|-------|--------------|---------|
| W22 | Home, About, Courses, Contact | Departments, Courses | Text |
| W23 | Home, About | Clubs (5) | Club info + Images |
| W24 | Home, About | Movies (5) | Movie details + Images |
| W25 | Home, About, Projects, Skills, Contact | Background, Experience, Skills | Portfolio items |
| W26 | Home, About | Years (FE,SE,TE,BE) | Subjects + Descriptions |

---

## Copy-Paste Changes Needed

### For W22 (College):
Replace:
- "PICT Pune" → Your college name
- Add courses and departments
- Update contact info

### For W23 (Clubs):
Replace:
- Club names (ACM, IEEE, etc.)
- Descriptions
- Add 5 club images
- Update achievements

### For W24 (Movies):
Replace:
- Movie names
- Poster images
- Genre and summary
- Review text

### For W25 (Portfolio):
Replace:
- Your name
- Profile image
- Projects (3-4)
- Skills (Frontend, Backend, Databases)
- Contact info

### For W26 (Course Structure):
Replace:
- FE subjects
- SE subjects
- TE subjects
- BE subjects

---

## Common Mistakes to Avoid

❌ Don't: Remove `data-role="page"`
❌ Don't: Change the navbar structure
❌ Don't: Forget `data-position="fixed"` on header/footer
❌ Don't: Remove jQuery Mobile CDN links

✅ Do: Update only the content inside elements
✅ Do: Keep the same number of pages/collapsibles
✅ Do: Test in browser after changes
✅ Do: Use consistent image naming

---

## How to Add More Content

### Add Another Club (in W23):
```html
<!-- CLUB N -->
<div data-role="collapsible" data-collapsed="true">
    <h3>Club Name</h3>
    <p><b>Description:</b> ...</p>
    <p><b>Achievements:</b></p>
    <ul>
        <li>Achievement 1</li>
    </ul>
    <img src="image.jpg" alt="Club">
</div>
```

### Add Another Page (in any project):
```html
<!-- NEW PAGE -->
<div data-role="page" id="new-page">
    <div data-role="header" data-position="fixed">
        <h1>Title</h1>
        <div data-role="navbar">
            <ul>
                <li><a href="#other-page">Link 1</a></li>
                <li><a href="#new-page" class="ui-btn-active">New Page</a></li>
            </ul>
        </div>
    </div>
    
    <div role="main" class="ui-content">
        <!-- Content -->
    </div>
    
    <div data-role="footer" data-position="fixed">
        <h4>Footer</h4>
    </div>
</div>
```

---

## Testing Checklist

- [ ] All links work (click navbar buttons)
- [ ] Collapsibles expand/collapse
- [ ] Images load (check browser console for errors)
- [ ] Mobile responsive (test on mobile or zoom out)
- [ ] Footer stays at bottom
- [ ] Header doesn't overlap content
- [ ] Page transitions smooth

---

## For Your Exam

**Learn once, use 5 times!**

1. Understand the basic structure
2. Know what collapsibles are
3. Know jQuery Mobile syntax:
   - `data-role="page"`
   - `data-role="header"`
   - `data-role="navbar"`
   - `data-role="collapsible"`
4. Practice one template fully
5. Apply to other projects with just content changes

---

## Questions?

- Check CONSISTENCY_GUIDE.md for detailed concepts
- Check the _TEMPLATE.html files for complete examples
- Check STANDARD_STYLE.css for styling reference

Good luck with your assignments! 🚀
