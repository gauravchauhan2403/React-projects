import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const pie = () => {

  return (
    <div>
      <Pie
        height={200}
        width={300}
        data={{
          labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
          datasets:[{
            label:'Votes',
            data:[12,4,7,10,7,14,15],
            // data:[{x:12, y:20},{x:19,y:5},{x:8,y:11},{x:15,y:15},{x:4,y:9},{x:9,y:12},{x:17,y:6}],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
          }]
        }}
        options={{
          options: {
            responsive:true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        }}
         />
    </div>
  )
}

export default pie
