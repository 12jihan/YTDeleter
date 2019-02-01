/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

let tmr = window.setInterval(
    () => {
        let _this = document.querySelector('ytd-playlist-video-list-renderer #button > yt-icon');
        
        if (_this) {
            
            _this.click();
        
            if (document.querySelector('.dropdown-content.style-scope.ytd-popup-container').children[0].children.length < 2) {
                document.querySelector('.dropdown-content.style-scope.ytd-popup-container').children[0].children[0].click();
            } 
            else {
                document.querySelector('.dropdown-content.style-scope.ytd-popup-container').children[0].children[1].click();
            }
        
        } 
        else {
            window.clearInterval(tmr)
        }
    }, 80);
