export default function getOptions(data) {
  const styleData = data.map((d, i) => ({
    name: d.name,
    value: d.value,
  }));

  return {
    title: {
      show: false,
    },
    tooltip: {
      trigger: 'item',
      formatter: (p) => {
        if (p.seriesName === 'total') {
          return '';
        }
        return `${p.name}<br/>${p.value}`;
      },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      extraCssText: 'box-shadow: 0 0 4px rgba(4, 18, 40, 0.2);',
      textStyle: {
        color: '#232323',
        fontSize: 12,
      },
      axisPointer: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: '1%',
      left: '0',
      right: '50',
      bottom: '0',
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          inside: false,
        },
        data: data.map((d) => d.name),
      },
      {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          inside: false,
          align: 'right',
          padding: [0, -40, 0, 0],
          color: 'red',
          fontSize: 16,
          textStyle: {
            color: '#333',
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular'
          },
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: data.map((d) => d.value),
      },
    ],
    xAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        zlevel: 2,
        barWidth: 6,
        showBackground: true,
        backgroundStyle: {
          borderRadius: 6,
        },
        itemStyle: {
          borderRadius: 6,
          color: '#61D7B3',
        },
        data: styleData,
        label: {
          show: true,
          position: [0, -18],
          fontSize: 12,
          color: '#999',
          formatter: function (param) {
            const { name } = param;
            return name;
          },
        },
      },
    ],
  };
}
