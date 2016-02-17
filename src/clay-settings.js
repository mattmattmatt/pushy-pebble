module.exports = [
    {
        "type": "heading",
        "id": "main-heading",
        "defaultValue": "Pushy Settings",
        "size": 1
    },
    {
        "type": "text",
        "defaultValue": "Configure Pushy here and save your settings with the \"Save\" button below."
    },
    {
        "type": "section",
        "items": [
            {
                "type": "heading",
                "defaultValue": "API configuration"
            },
            {
                "type": "input",
                "appKey": "access_token",
                "defaultValue": "",
                "label": "Access Token",
                "attributes": {
                    "placeholder": "eg: o.VwvZTyTPVw6y4UdlTQejsktcw98Imyp",
                    "required": "required",
                    type: "text"
                }
            }
        ]
    },
    {
        "type": "submit",
        "defaultValue": "Save"
    }
];