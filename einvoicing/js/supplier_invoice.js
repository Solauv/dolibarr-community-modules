/**
 * Object handling the reimport of supplier invoice lines, so user can reimport lines in 3 different types :
 * - auto : will result in as many lines in Dolibarr supplier invoice than in input supplier e-invoice (may create new products in Dolibarr for unknown products presents in e-invoice)
 * - free lines : will result in as many lines in Dolibarr supplier invoice than in input supplier e-invoice (but each input e-invoice line will be converted to a free line => no need to create unknown products in Dolibarr)
 * - target product : will create one line (linked to the target product) by VAT rate (could be usefull to avoid the clutter of an e-invoice with a lot of lines)
 *
 * This allow to make supplier invoice to be more convenient and to make it fit to your accountancy requirements
 * IMPORTANT => Reimport must keep global amounts and VAT amounts equals to original e-invoice (it is verified on supplier invoice validation)
 */
const einvoicingSupplierInvoice = {

    /**
     * Function to init einvoicingSupplierInvoice object (run when DOM content is loaded)
     */
    init: function() {
        $('input[name="extraction_type"]').on('change', einvoicingSupplierInvoice.handleExtractionTypeChange);
    },

    /**
     * Handle the display of the product select list when choosing type "re-import to a target product (with one line by VAT rate)"
     * @param Event evt
     */
    handleExtractionTypeChange: function(evt) {
        const currentTarget = $(evt.currentTarget);
        if (currentTarget.val() == 3) {
            $("#extraction-target-product-choice").show();
        } else {
            $("#extraction-target-product-choice").hide();
        }
    },
};

document.addEventListener('DOMContentLoaded', einvoicingSupplierInvoice.init);
