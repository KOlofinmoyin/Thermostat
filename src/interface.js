        // window.onload = function() {
        //   alert("Welcome, Ellie & Kenny!");
        // };

        $( document ).ready(function() {
          var thermostat = new Thermostat();

          $("a").addClass( "test" );


          $("a").click(function(event){
            event.preventDefault();
            $(this).fadeOut("slow");
          });

          $("#degrees").text(thermostat.temperature);

          $("#upButton").click(function() {
            thermostat.up(1);
            $("#degrees").text(thermostat.temperature);
          });



        });
