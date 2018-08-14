/**
 * @file mouseout.js
 * @author simpart
 */
const mf = require('mofron');

/**
 * @class event.MouseOut
 * @brief mouse out event for mofron component
 */
mf.event.MouseOut = class extends mf.Event {
    
    constructor (po, p1) {
        try {
            super();
            this.name('MouseOut');
            this.prmMap('handler');
            this.prmOpt(po, p1);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                'mouseout',
                () => { 
                    try { evt_obj.execHandler(); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.MouseOut;
/* end of file */
