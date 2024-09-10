// Copyright (c) 2024, y and contributors
// For license information, please see license.txt

frappe.ui.form.on('TC Meeting', {
	onload: function(frm) {
		frm.set_query('subjects_committee', () => {
			return {
				filters: {
					subject_proirty: ''
				}
			}
		})
    }
	//subjects_committee:
	// refresh: function(frm) {

	// }
});
