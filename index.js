/**
 * @file mouseout.js
 * @author simpart
 */

/**
 * @class event.MouseOut
 * @brief mouse out event for mofron component
 */
mofron.event.MouseOut = class extends mofron.Event {
    
    eventConts () {
        try {
            var cbf = this.func;
            var cbp = this.parm;
            
            this.target.getRawDom().addEventListener('mouseout',function() {
                try {
                    if (null != cbf) {
                        cbf(cbp);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            },false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
