JACCARD = document.getElementById('jaccard');
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
  }], layout);

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
    name: 'ViTs (R2 = 0.04, rho=0.18)',
  },
  {
    x: [25.4, 21.4, 32.2],
    y: [7.3, 4.4, 15.1],
    text: ['RN-INSUP', 'RN-DINO', 'MoCo. v3, RN'],
    type: 'scatter',
    mode: 'markers',
    name: 'ResNets (R2 = 0.99, rho=1.00)',
  }], layout );

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
  }], layout );

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
  }], layout );
