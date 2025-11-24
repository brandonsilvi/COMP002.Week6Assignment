// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

//Breaking his down into sections first to read preferences and setting them using localStorage
function applyPreferences() {  //pull stored values
    const savedName = localStorage.getItem('name');  //get stored name
    const bgColor = localStorage.getItem('bgColor'); //get stored background color
    const fgColor = localStorage.getItem('fgColor'); //get stored text color (text is foreground)
    
//Next the if statements to apply the preferences if they exist

    if (savedName) {  //if name is in localStorage, set greeting.
        document.getElementById('greeting').textContent = `Welcome back, ${savedName}!`;
    }
    if (bgColor) {  //if background color is in localStorage, set it.
        document.body.style.backgroundColor = bgColor;
    }
    if (fgColor) {  //if foreground color is in localStorage, set it.
        document.body.style.color = fgColor;
    }
}

//Call the function to apply preferences on page load
applyPreferences();

//Set up event listener for form submission to save preferences