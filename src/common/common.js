// common.js: Only constants and stateless helper functions should be
// in this file.
console.log('TabFern common.js loading');

//////////////////////////////////////////////////////////////////////////
// General constants //

const TABFERN_VERSION='0.1.2 alpha \u26a0'

//////////////////////////////////////////////////////////////////////////
// Messages between parts of TabFern //

const MSG_GET_VIEW_WIN_ID = 'getViewWindowID';

//////////////////////////////////////////////////////////////////////////
// Names of settings //

//////////////////////////////////////////////////////////////////////////
// Functions //

/// Get a boolean setting from options_custom, which uses HTML5 localStorage.
function getBoolSetting(setting_name, default_value = false)
{
    let locStorageValue = localStorage.getItem('store.settings.' + setting_name);
    if ( locStorageValue === null ) {   // nonexistent key
        return default_value;
    } else {
        let str = String(locStorageValue).toLowerCase();
        if ( str === "false" ) {
            return false;
        } else if ( str === "true" ) {
            return true;
        } else {
            return default_value;
        }
    }
} //getBoolSetting

/// Append a <script> to the <head> of #document.
/// @param {Document} document
/// @param {String} url URL of script to load
/// @param {String} [type] Type of Script tag. Default: text/javascript
/// @param {Function} callback Set as callback for BOTH onreadystatechange and onload
function asyncAppendScriptToHead(document, url, callback, type = 'text/javascript')
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = type;
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
    script.onerror = callback;

    // Fire the loading
    head.appendChild(script);
} //asyncAppendScriptToHead()

// vi: set ts=4 sts=4 sw=4 et ai fo-=o: //
