/*
 * View model for Terminal Messaging
 *
 * Author: jneilliii
 * License: MIT
 */
$(function() {
    function TerminalmessagingViewModel(parameters) {
        var self = this;

        self.terminalViewModel = parameters[0];

        self.tag = function(prefix, cls){
            $('#terminal-output span').filter(function(){return prefix.test($(this).text());})
                .addClass(cls).text(function(){return $(this).text().replace(prefix,'');});
        };

        // Add a tag we can style to the gcode terminal output.
        self.terminalViewModel.log.subscribe(function(){
            self.tag(/^(?:Recv:|<<<) /, 'received');
            self.tag(/^(?:Send:|>>>) /, 'sent');
        })
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: TerminalmessagingViewModel,
        dependencies: [ "terminalViewModel" ],
        elements: []
    });
});
