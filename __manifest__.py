# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Web POS',
    'version' : '1.0',
    'depends' : ['point_of_sale','base'],
    'data': [
    ],
    'assets':{
        'point_of_sale.assets': [
            "wb_pos/static/src/js/web_simple_button.js",
            "wb_pos/static/src/xml/sample_button.xml",
            "wb_pos/static/src/js/web_clear_button.js",
            "wb_pos/static/src/xml/clearall_button.xml"
        ],
    }
}
