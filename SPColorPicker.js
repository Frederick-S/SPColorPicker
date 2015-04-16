(function (window) {
    var pick = function (options) {
        var defaults = {
            title: 'Color',
            url: '/_layouts/15/morecolors.aspx'
        };

        if (!options.title) {
            options.title = defaults.title;
        }

        if (!options.url) {
            options.url = defaults.url;
        }

        if (!(typeof SP === "undefined")) {
            if (SP.UI && SP.UI.ModalDialog) {
                SP.UI.ModalDialog.showModalDialog(options);
            } else {
                SP.SOD.executeFunc("sp.ui.dialog.js", null, function () {
                    SP.UI.ModalDialog.showModalDialog(options);
                })
            }
        }
    };

    window.SPColorPicker = {
        pick: pick
    };
})(window);
