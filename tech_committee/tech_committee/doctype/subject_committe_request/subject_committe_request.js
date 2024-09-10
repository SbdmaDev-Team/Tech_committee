frappe.ui.form.on('Subject Committee Request', {
    party_type: function(frm) {
        // Clear the Party field when Party Type is changed
        frm.set_value('party', null);
        // Trigger a refresh to make sure the field is updated
        frm.refresh_field('party');
    }
});