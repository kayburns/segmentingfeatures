TESTER = document.getElementById('tester');
Plotly.newPlot( TESTER, [
  {
    x: [0, 0, 27.3, 45.9, 37.5, 26.5, 0, 0, 41.9, 0, 38.6, 23.7, 34.4, 27.2, 44.1],
    y: [4.4, 6.6, 7.3, 8.9, 9.0, 10.7, 11.2, 11.7, 13.9, 14.4, 15.1, 15.1, 18.0, 18.8],
    text: ['RN-INSUP', 'RN-DINO', 'ViT-INSUP', 'ViT-DINO', 'SIN-SUP', 'VIP', 'MVP', 'R3M', 'MoCo. v3, ViT', 'MoCo. v3, RN', 'Dino. v2, ViT', 'MVP, ViT-S (HOI)', 'CLIP, ViT-B/16', 'MAE-IN, ViT-S', 'MoCo. v3, ViT-B'],
  }], {
margin: { t: 0 } } );
