// read data from JSON file (currently not working - 404 ERROR when launched)
function dataplot() {
    d3.json("data/samples.json", function(samples) {

        console.log(samples);

        //get the data need from the JSON file - still not able to vie any data due to 404 error 


        var samp_value = samples.sample_values;
        var oti_value = samples.otu_ids;
        var otu_labels = samples.otu_labels;

        var trace1 = {
            type: "bar",
            x: samp_value,
            y: oti_value,
            labels: otu_label,
            orientation: 'h',

        };
        //bubble map

        var trace2 = {
            x: otu_ids,
            y: sample_values,
            mode: otu_ids,
            marker: {
                size: sample_values
            }
        };

        var data2 = [trace2];

        var layout = {
            title: 'Sample Data',
            showlegend: false,
            height: 600,
            width: 600
        };


        Plotly.newPlot('selDataset', data);

        Plotly.newPlot('sample-metadata', data2, layout);

    });


}