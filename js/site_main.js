!function(a){function t(){a("body").trigger("update_checkout")}"1"==awdr_params.refresh_order_review&&(a(document).on("change",'input[name="payment_method"],input[name="billing_city"],input[name="billing_postcode"]',(function(){t()})),a(document).on("blur",'input[name="billing_email"], select#billing_state',(function(){t()}))),a(document).ready((function(a){function t(){if("show_dynamically"==awdr_params.enable_update_price_with_qty){function t(t,r,i){let e="";return t.find(r).length?(e=t.find(r).first(),!0===i&&(t.find(r+" .price").length||e.html("<div class='price'></div>"),e=t.find(r+" .price").first())):(e=a(r).first(),!0===i&&(a(r+" .price").length||e.html("<div class='price'></div>"),e=a(r+" .price").first())),e}a(document).on("change",'[name="quantity"]',(function(){var r=a(this);setTimeout((function(){var i=r.val(),e=0,_="",o=r.closest("form");if(o.find('button[name="add-to-cart"]').length){e=o.find('button[name="add-to-cart"]').first().val();var n="div.product p.price";null!=awdr_params.custom_target_simple_product&&""!=awdr_params.custom_target_simple_product&&(n=awdr_params.custom_target_simple_product),_=t(o,n,!1)}else if(o.find('input[name="variation_id"]').length){e=o.find('input[name="variation_id"]').val();n="div.product .woocommerce-variation-price";null!=awdr_params.custom_target_variable_product&&""!=awdr_params.custom_target_variable_product&&(n=awdr_params.custom_target_variable_product),_=t(o,n,!0)}else if(o.find('input[name="add-to-cart"]').length){e=o.find('input[name="add-to-cart"]').first().val();n="div.product p.price";null!=awdr_params.custom_target_simple_product&&""!=awdr_params.custom_target_simple_product&&(n=awdr_params.custom_target_simple_product),_=t(o,n,!1)}if(!e||0==e){if(null!=awdr_params.custom_simple_product_id_selector&&""!=awdr_params.custom_simple_product_id_selector){let r=awdr_params.custom_simple_product_id_selector;e=a(r).val();let i="div.product p.price";null!=awdr_params.custom_target_simple_product&&""!=awdr_params.custom_target_simple_product&&(i=awdr_params.custom_target_simple_product),_=t(o,i,!1)}if(null!=awdr_params.custom_variable_product_id_selector&&""!=awdr_params.custom_variable_product_id_selector){let r=awdr_params.custom_variable_product_id_selector;e=a(r).val();let i="div.product .woocommerce-variation-price";null!=awdr_params.custom_target_variable_product&&""!=awdr_params.custom_target_variable_product&&(i=awdr_params.custom_target_variable_product),_=t(o,i,!0)}}if(e&&_&&0!=e){var c={action:"wdr_ajax",method:"get_price_html",product_id:e,qty:i,awdr_nonce:awdr_params.nonce};a.ajax({url:awdr_params.ajaxurl,data:c,type:"POST",success:function(a){a.price_html?_.html(a.price_html):null!=a.original_price_html&&_.html(a.original_price_html)},error:function(a){_.html("")}})}}),0)}))}}if(awdr_params.js_init_trigger&&a(document).on(awdr_params.js_init_trigger,(function(){t()})),t(),"1"==awdr_params.awdr_dynamic_bulk_table_status&&"on"==awdr_params.awdr_dynamic_bulk_table_off){function r(t){setTimeout((function(){if(""!=t&&"0"!=t){var r={action:"wdr_ajax",method:"get_variable_product_bulk_table",product_id:t,awdr_nonce:awdr_params.nonce};let i="div.awdr-bulk-customizable-table";null!=awdr_params.awdr_opacity_to_bulk_table&&""!=awdr_params.awdr_opacity_to_bulk_table&&(i=awdr_params.awdr_opacity_to_bulk_table),a.ajax({url:awdr_params.ajaxurl,data:r,type:"POST",beforeSend:function(){a(i).css("opacity","0.5")},complete:function(){a(i).css("opacity","1")},success:function(t){t.bulk_table&&a(".awdr-bulk-customizable-table").html(t.bulk_table)},error:function(t){a(".awdr-bulk-customizable-table").html("")}})}}),100)}a(".single_variation_wrap").on("hide_variation",(function(t){r(a(this).closest("form").find('input[name="product_id"]').val())})),a(".single_variation_wrap").on("show_variation",(function(a,t,i){let e=t.variation_id;null!=t.is_bundled&&1==t.is_bundled||r(e)}))}}))}(jQuery);