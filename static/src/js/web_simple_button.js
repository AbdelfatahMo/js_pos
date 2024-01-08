odoo.define('wb_pos.WBSimpleButton', function (require) {
    'use strict';
    const PosComponent = require('point_of_sale.PosComponent')
    const ProductScreen = require('point_of_sale.ProductScreen')
    const Registries = require('point_of_sale.Registries')
    const { useListener } = require('@web/core/utils/hooks')
    const core = require('web.core')
    var _t = core._t;

    class WBSimpleButton extends PosComponent {
        setup() {
            super.setup()
            useListener('click', this.wb_simple_button_click)
        }


        async wb_simple_button_click() {
            
            var multiLang = await this.rpc({
                route:'/pos/rpc/example',
                params:{} 
            })

            var multiLangList =[]
            multiLang.forEach(element => {
                multiLangList.push({
                    'id': element.id,
                    'label': element.name,
                    'item': element
                })
            });

            console.log('Multi Language List ------>',multiLangList)

            var selectPopup = await this.showPopup('SelectionPopup',{
                title:'Choose language!.',
                list: multiLangList
            })

            var {confirmed,payload: selectedOptions} = selectPopup

            console.log(selectPopup)
            console.log(selectedOptions)
            // var data = await this.rpc({
            //     'model':'res.lang',
            //     'method':'search_read',
            //     'args':[[],['id','name','code','iso_code']]
            // })

            // var data = await this.rpc({
            //     route:'/pos/rpc/example',
            //     params:{}
            // })

            // console.log(data)

            // data.forEach(element => {
            //     console.log('Record ----------> ',element)
            // });

            // this.showPopup('ErrorPopup',{
            //     'title': this.env._t('Error'),
            //     'body':this.env._t('Test Error popup JS!.')
            // })
            // var {confirmed} = await this.showPopup('ConfirmPopup',{
            //     title:this.env._t('Confirm'),
            //     body: this.env._t('Are you sure to continue?'),
            //     confirmText: this.env._t('Continue'),
            //     cancelText: this.env._t('cancel')
            // })
            // console.log("Button pressed",confirmed)

            // var list = await this.showPopup('SelectionPopup', {
            //     title: 'Select one of list!.',
            //     list: [{ 'id': 0, 'label': _t('well'), 'item': false },
            //         { 'id': 1, 'label': _t('good'), 'item': true },
            //         { 'id': 2, 'label': _t('bad'), 'item': false }]
            // });
            // console.log(list)
            // const closeInfo = await this.env.pos.getClosePosInfo();
            // const closePopup = this.showPopup('ClosePosPopup',{
            //     info:closeInfo,
            //     keepBehind:true
            // });
            // console.log(closePopup)
        }
    }

    WBSimpleButton.template = "WBSimpleButton";

    ProductScreen.addControlButton({
        component: WBSimpleButton,
        position: ["after", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(WBSimpleButton)

    return WBSimpleButton;

});