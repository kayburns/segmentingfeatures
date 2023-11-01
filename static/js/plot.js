function getBestFitTrace(xData, yData, color) {
  // Calculate the means of x and y
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const meanX = mean(xData);
  const meanY = mean(yData);

  // Calculate the coefficients (slope and y-intercept)
  const num = xData.map((x, i) => (x - meanX) * (yData[i] - meanY)).reduce((a, b) => a + b, 0);
  const den = xData.map(x => Math.pow(x - meanX, 2)).reduce((a, b) => a + b, 0);
  const slope = num / den;
  const yIntercept = meanY - slope * meanX;

  // Calculate y values for the best-fit line
  const regressionY = xData.map(x => slope * x + yIntercept);

  // Define the best-fit trace
  const traceBestFit = {
      x: xData,
      y: regressionY,
      type: 'scatter',
      mode: 'lines',
      name: 'Best Fit Line',
      line: {
          color: color,
      },
      showlegend: false,
  };

  return traceBestFit;
}

JACCARD = document.getElementById('jaccard');
const jaccardX = [27.3, 45.9, 37.5, 26.5, 41.9, 38.6, 23.7, 34.4, 27.2, 44.1];
const jaccardY = [11.2, 18.0, 13.9, 11.7, 15.1, 14.4, 6.6, 10.7, 9.0, 18.8];
const jaccardTrace = getBestFitTrace(jaccardX, jaccardY, '#1f77b4'); 

layout = {
  showlegend: true,
  legend: {"orientation": "h", "y": -.2},
  xaxis: {
    title: {
      text: 'Jaccard Index',
    }
  },
  yaxis: {
    title: {
      text: 'OOD Success Rate',
    }
  },
};
Plotly.newPlot( JACCARD, [
  {
    x: [27.3, 45.9, 37.5, 26.5, 41.9, 38.6, 23.7, 34.4, 27.2, 44.1],
    y: [11.2, 18.0, 13.9, 11.7, 15.1, 14.4, 6.6, 10.7, 9.0, 18.8],
    text: ['ViT-INSUP', 'ViT-DINO', 'MVP', 'MoCo. v3, ViT', 'MoCo. v3, RN', 'Dino. v2, ViT', 'MVP, ViT-S (HOI)', 'CLIP, ViT-B/16', 'MAE-IN, ViT-S', 'MoCo. v3, ViT-B'],
    type: 'scatter',
    mode: 'markers',
    name: 'ViTs (R2 = 0.85, rho=0.90)',
  },jaccardTrace], layout);

SHAPE = document.getElementById('shape');
layout = {
  showlegend: true,
  legend: {"orientation": "h", "y": -.2},
  xaxis: {
    title: {
      text: 'Shape-Bias',
    }
  },
  yaxis: {
    title: {
      text: 'OOD Success Rate',
    }
  },
};
Plotly.newPlot( SHAPE, [
  {
    x: [33.3, 33.4, 87.0, 40.1, 41.1, 47.9, 45.5],
    y: [11.2, 18.0, 14.0, 15.1, 14.4, 10.7, 18.8],
    text: ['ViT-INSUP', 'ViT-DINO', 'SIN-SUP', 'MoCo. v3, ViT', 'Dino. v2, ViT', 'CLIP, ViT-B/16', 'MoCo. v3, ViT-B'],
    type: 'scatter',
    mode: 'markers',
    name: 'ViTs (R2 = 0.04, rho=-0.18)',
  },
  {
    x: [25.4, 21.4, 32.2],
    y: [7.3, 4.4, 15.1],
    text: ['RN-INSUP', 'RN-DINO', 'MoCo. v3, RN'],
    type: 'scatter',
    mode: 'markers',
    name: 'ResNets (R2 = 0.99, rho=1.00)',
  },
  getBestFitTrace([33.3, 33.4, 87.0, 40.1, 41.1, 47.9, 45.5], [11.2, 18.0, 14.0, 15.1, 14.4, 10.7, 18.8], '#1f77b4'),
  getBestFitTrace([25.4, 21.4, 32.2], [7.3, 4.4, 15.1], '#ff7f0e')
], layout );

IMAGENET = document.getElementById('imagenet');
layout = {
  showlegend: true,
  legend: {"orientation": "h", "y": -.2},
  xaxis: {
    title: {
      text: 'ImageNet Accuracy',
    }
  },
  yaxis: {
    title: {
      text: 'OOD Success Rate',
    }
  },
};
Plotly.newPlot( IMAGENET, [
  {
    x: [79.7, 76.9, 51.9, 73.2, 81.1, 68.3, 76.7],
    y: [11.2, 18.0, 14.0, 15.1, 14.4, 10.7, 18.8],
    text: ['ViT-INSUP', 'ViT-DINO', 'SIN-SUP', 'MoCo. v3, ViT', 'Dino. v2, ViT', 'CLIP, ViT-B/16', 'MoCo. v3, ViT-B'],
    type: 'scatter',
    mode: 'markers',
    name: 'ViTs (R2 = 0.04, rho=0.18)',
  },
  {
    x: [76.2, 75.3, 72.0],
    y: [7.3, 4.4, 15.1],
    text: ['RN-INSUP', 'RN-DINO', 'MoCo. v3, RN'],
    type: 'scatter',
    mode: 'markers',
    name: 'ResNets (R2 = 0.80, rho=-0.50)',
  },
  getBestFitTrace([79.7, 76.9, 51.9, 73.2, 81.1, 68.3, 76.7], [11.2, 18.0, 14.0, 15.1, 14.4, 10.7, 18.8], '#1f77b4'),
  getBestFitTrace([76.2, 75.3, 72.0], [7.3, 4.4, 15.1], '#ff7f0e')
], layout );

INDOMAIN = document.getElementById('indomain');
layout = {
  showlegend: true,
  legend: {"orientation": "h", "y": -.2},
  xaxis: {
    title: {
      text: 'In-Domain Success Rate',
    }
  },
  yaxis: {
    title: {
      text: 'OOD Success Rate',
    }
  },
};
Plotly.newPlot( INDOMAIN, [
  {
    x: [33.9, 51.8, 45.2, 43.6, 44.3, 39.6, 39.9, 35.5, 36.5, 50.8],
    y: [11.2, 18.0, 14.0, 11.7, 15.1, 14.4, 6.6, 10.7, 9.0, 18.8],
    text: ['ViT-INSUP', 'ViT-DINO', 'SIN-SUP', 'MVP', 'MoCo. v3, ViT', 'MoCo. v3, RN', 'Dino. v2, ViT', 'MVP, ViT-S (HOI)', 'CLIP, ViT-B/16', 'MAE-IN, ViT-S', 'MoCo. v3, ViT-B'],
    type: 'scatter',
    mode: 'markers',
    name: 'ViTs (R2 = 0.64, rho=0.73)',
  },
  {
    x: [32.5, 25.0, 57.2, 50.0, 45.6],
    y: [7.3, 4.4, 8.9, 11.7, 15.1],
    text: ['RN-INSUP', 'RN-DINO', 'R3M', 'VIP', 'MoCo. v3, RN'],
    type: 'scatter',
    mode: 'markers',
    name: 'ResNets (R2 = 0.43, rho=0.60)',
  },
  getBestFitTrace([33.9, 51.8, 45.2, 43.6, 44.3, 39.6, 39.9, 35.5, 36.5, 50.8], [11.2, 18.0, 14.0, 11.7, 15.1, 14.4, 6.6, 10.7, 9.0, 18.8], '#1f77b4'),
  getBestFitTrace([32.5, 25.0, 57.2, 50.0, 45.6], [7.3, 4.4, 8.9, 11.7, 15.1], '#ff7f0e')
], layout );
