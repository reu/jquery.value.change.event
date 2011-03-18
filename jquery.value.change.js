(function($){
  $.event.special.valuechange = {
    setup: function(data, namespaces) {
      $(this).bind("keyup", $.event.special.valuechange.trigger);
      $(this).bind("keydown", $.event.special.valuechange.trigger);
    },

    trigger: function(event) {
      if($(this).val() != $(this).data("valueWas"))
        $(this).trigger("valuechange", $(this).data("valueWas")) && $(this).data("valueWas", $(this).val());
    }
  };
})(jQuery);
