odoo.define('wb_pos.WBClearAllButton', function (require) {
    'use strict';
    const PosComponent = require('point_of_sale.PosComponent')
    const ProductScreen = require('point_of_sale.ProductScreen')
    const Registries = require('point_of_sale.Registries')
    const { useListener } = require('@web/core/utils/hooks')
    const core = require("web.core")
    var _t = core._t;

    class WBClearAllButton extends PosComponent{
        setup(){
            super.setup()
            useListener('click',this.wb_clear_all_click)
        }

        async wb_clear_all_click(){
            var {confirmed} = await this.showPopup('ConfirmPopup',{
                title : _t('Clear All'),
                body : _t('Are want clear all orders?!')
            })
            console.log(confirmed)
            if (confirmed == true) {
                var current_orders = this.env.pos.get_order()
                console.log("Clear All Clicked",current_orders)
                current_orders.orderlines.filter(line=> line.get_product()).forEach(element=> current_orders.remove_orderline(element));
            }

        }
    };

    WBClearAllButton.template = 'WBClearAllButton';

    ProductScreen.addControlButton({
        component: WBClearAllButton,
        position : ['before','OrderlineCustomerNoteButton']
    });

    Registries.Component.add(WBClearAllButton);

    return WBClearAllButton;


});