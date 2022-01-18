 (function($) {
     $.fn.responsivepills = function() {
         this.addClass('responsive-pills'),
             this.append($('<span class="dropdown-arrow"></span>')),

             this.on("click", "li > a.active, span.dropdown-arrow", function() {
                 this.toggleClass('open');
             }.bind(this)), this.on("click", "li > a:not(.active)", function() {
                 this.removeClass("open")
             }.bind(this));
     }
 })(jQuery);