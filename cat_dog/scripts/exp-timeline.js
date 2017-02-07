$(document).ready(function(){

    // Preload images
    var img_names = ['test.png']; // TODO: Replace with a list of images of the form cats/cat_{1-50}.jpg and dogs/dog_{1-50}.jpg
    _.map(img_names, preloadImage);
    
    var trial = {type: 'text', text: 'Hello world! Press any key to display data.'};
    
    var exp_timeline = [trial];

    jsPsych.init({
        display_element: $('#jspsych-target'),
        timeline: exp_timeline,
        on_finish: function(){
            var data = jsPsych.data.getData();

            // Show data on browser
            jsPsych.data.displayData();
        }
    });
});