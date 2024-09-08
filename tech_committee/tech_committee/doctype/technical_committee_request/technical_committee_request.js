frappe.ui.form.on('Technical Committee Request', {
    action_template: function (frm) {
        if (frm.doc.action_template) {
            // Fetch the selected Action Template
            frappe.call({
                method: 'frappe.client.get',
                args: {
                    doctype: 'Action Template',
                    name: frm.doc.action_template
                },
                callback: function (response) {
                    var action_template = response.message;

                    if (action_template) {
                        // Update the Requirement Table in Technical Committee Request
                        frm.set_value('requirement_table', action_template.requirement_table);
                    }
                }
            });
        } else {
            // Clear the Requirement Table if no Action Template is selected
            frm.set_value('requirement_table', []);
        }
    },
    subject_committe: function (frm) {
        if (frm.doc.subject_committe) {
            // Fetch the selected Action Template
            frappe.call({
                method: 'frappe.client.get',
                args: {
                    doctype: 'Subject Committe',
                    name: frm.doc.subject_committe
                },
                callback: function (response) {
                    var subject_committe = response.message;

                    if (subject_committe) {
                        // Update the Requirement Table in Technical Committee Request
                        frm.set_value('subjects_committee', subject_committe.subjects_committee);
                        frm.set_value('agenda_decision', subject_committe.agenda_decision);
                    }
                }
            });
        } else {
            // Clear the Requirement Table if no Action Template is selected
            frm.set_value('subjects_committee', []);
        }
    },
   
});