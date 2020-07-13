function buildMetaData(samples) {

    url = '../data/samples.json';
    //adding the sample data
    d3.json(url).then((data) => {
        var PANEL = d3.select("#sample-metadata");
        //
        Object.entries(data).forEach(([key, value]) => {
            PANEL.append("h5").text(`${key}:${value}`);
        })
        buildGauge(data.WFREQ);
    })
}

function createCharts(sample) {
    d3.json(`url`).then((data) => {

        const otu_ids = data.otu_ids;
        const otu_labels = data.otu_labels;
        const sample_values = data.sample_values;

        let bubbleLayout = {
            margin: { t: 0 },
            hovermode: "closests",
            xaxis: { title: "OTU ID" }
        }

        let bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
            }
        }]

        Plotly.plot("bubble", bubbleData, bubbleLayout);
        let pieData = [{
            values: sample_values.slice(0, 10),
            labels: otu_ids.slice(0, 10),
            hovertext: otu_labels.slice(0, 10),
            hoverinfo: "hovertext",
            type: "pie"
        }];

        let pieLayout = {
            margin: { t: 0, l: 0 }
        };

        Plotly.plot("pie", pieData, pieLayout)
    })
}

function init() {

    var selector = d3.select("#selDataset");
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        const firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
}

init();