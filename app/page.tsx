'use client'

import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import 'echarts-gl'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('basic')

  const categories = [
    { id: 'basic', name: 'Basic Charts' },
    { id: 'advanced', name: 'Advanced Charts' },
    { id: 'statistical', name: 'Statistical' },
    { id: 'geographic', name: 'Geographic' },
    { id: '3d', name: '3D Charts' },
    { id: 'special', name: 'Special Effects' },
  ]

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Apache ECharts Complete Demo
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Comprehensive showcase of all chart types and features
        </p>
      </header>

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '12px 24px',
              background: activeCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.2)',
              color: activeCategory === cat.id ? '#667eea' : '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            {cat.name}
          </button>
        ))}
      </nav>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '30px',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        {activeCategory === 'basic' && <BasicCharts />}
        {activeCategory === 'advanced' && <AdvancedCharts />}
        {activeCategory === 'statistical' && <StatisticalCharts />}
        {activeCategory === 'geographic' && <GeographicCharts />}
        {activeCategory === '3d' && <ThreeDCharts />}
        {activeCategory === 'special' && <SpecialEffects />}
      </div>
    </div>
  )
}

function ChartContainer({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.95)',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{
        color: '#667eea',
        fontSize: '1.5rem',
        marginBottom: '15px',
        fontWeight: 'bold'
      }}>
        {title}
      </h3>
      {children}
    </div>
  )
}

function BasicCharts() {
  return (
    <>
      <LineChart />
      <BarChart />
      <PieChart />
      <ScatterChart />
      <AreaChart />
      <CandlestickChart />
    </>
  )
}

function AdvancedCharts() {
  return (
    <>
      <RadarChart />
      <TreemapChart />
      <SunburstChart />
      <GraphChart />
      <SankeyChart />
      <FunnelChart />
    </>
  )
}

function StatisticalCharts() {
  return (
    <>
      <BoxplotChart />
      <HeatmapChart />
      <ParallelChart />
      <GaugeChart />
      <ThemeRiverChart />
      <CalendarChart />
    </>
  )
}

function GeographicCharts() {
  return (
    <>
      <MapChart />
      <GeoScatterChart />
      <GeoLinesChart />
    </>
  )
}

function ThreeDCharts() {
  return (
    <>
      <Bar3DChart />
      <Scatter3DChart />
      <Surface3DChart />
      <Lines3DChart />
    </>
  )
}

function SpecialEffects() {
  return (
    <>
      <LiquidFillChart />
      <WordCloudChart />
      <PictorialBarChart />
      <CustomChart />
    </>
  )
}

function LineChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Multi-line with Marks', left: 'center' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Sales', 'Revenue', 'Profit'], bottom: 0 },
      grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Sales',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Revenue',
          type: 'line',
          data: [180, 220, 180, 120, 90, 130, 150],
          smooth: true
        },
        {
          name: 'Profit',
          type: 'line',
          data: [90, 110, 100, 70, 50, 80, 90],
          step: 'middle'
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Line Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function BarChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Bar Chart with Background', left: 'center' },
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      legend: { data: ['2023', '2024'], bottom: 0 },
      grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
      xAxis: { type: 'value', boundaryGap: [0, 0.01] },
      yAxis: { type: 'category', data: ['USA', 'China', 'Japan', 'UK', 'France', 'India'] },
      series: [
        {
          name: '2023',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230],
          showBackground: true,
          backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' }
        },
        {
          name: '2024',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Bar Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function PieChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Pie with Rose Type', left: 'center' },
      tooltip: { trigger: 'item' },
      legend: { bottom: 0 },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'Rose 1' },
            { value: 38, name: 'Rose 2' },
            { value: 32, name: 'Rose 3' },
            { value: 30, name: 'Rose 4' },
            { value: 28, name: 'Rose 5' },
            { value: 26, name: 'Rose 6' },
            { value: 22, name: 'Rose 7' },
            { value: 18, name: 'Rose 8' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Pie Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function ScatterChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data = Array.from({ length: 100 }, () => [
      Math.random() * 100,
      Math.random() * 100
    ])

    const option = {
      title: { text: 'Scatter with Visual Map', left: 'center' },
      tooltip: { trigger: 'item' },
      visualMap: {
        min: 0,
        max: 100,
        dimension: 1,
        orient: 'vertical',
        right: 10,
        top: 'center',
        text: ['HIGH', 'LOW'],
        calculable: true,
        inRange: {
          color: ['#f2c31a', '#24b7f2', '#c52a32']
        }
      },
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'scatter',
          symbolSize: (val: number[]) => val[0] / 5,
          data: data,
          emphasis: {
            focus: 'self'
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Scatter Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function AreaChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Stacked Area Chart', left: 'center' },
      tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
      legend: { data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search'], bottom: 0 },
      grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search',
          type: 'line',
          stack: 'Total',
          label: { show: true, position: 'top' },
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Area Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function CandlestickChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data = [
      [20, 34, 10, 38],
      [40, 35, 30, 50],
      [31, 38, 33, 44],
      [38, 15, 5, 42],
      [12, 27, 8, 35],
      [25, 40, 20, 45],
      [35, 30, 25, 40]
    ]

    const option = {
      title: { text: 'Candlestick Chart', left: 'center' },
      tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
      grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'candlestick',
          data: data,
          itemStyle: {
            color: '#ec0000',
            color0: '#00da3c',
            borderColor: '#8A0000',
            borderColor0: '#008F28'
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Candlestick Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function RadarChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Radar Chart', left: 'center' },
      legend: { data: ['Team A', 'Team B'], bottom: 0 },
      radar: {
        indicator: [
          { name: 'Speed', max: 100 },
          { name: 'Power', max: 100 },
          { name: 'Defense', max: 100 },
          { name: 'Accuracy', max: 100 },
          { name: 'Agility', max: 100 },
          { name: 'Stamina', max: 100 }
        ]
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [80, 90, 70, 82, 88, 75],
              name: 'Team A',
              areaStyle: { opacity: 0.5 }
            },
            {
              value: [70, 75, 85, 90, 80, 82],
              name: 'Team B',
              areaStyle: { opacity: 0.5 }
            }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Radar Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function TreemapChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Treemap Chart', left: 'center' },
      tooltip: { formatter: '{b}: {c}' },
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: 'Category A',
              value: 1212,
              children: [
                { name: 'A1', value: 560 },
                { name: 'A2', value: 352 },
                { name: 'A3', value: 300 }
              ]
            },
            {
              name: 'Category B',
              value: 1000,
              children: [
                { name: 'B1', value: 400 },
                { name: 'B2', value: 300 },
                { name: 'B3', value: 300 }
              ]
            },
            {
              name: 'Category C',
              value: 800,
              children: [
                { name: 'C1', value: 400 },
                { name: 'C2', value: 400 }
              ]
            }
          ],
          leafDepth: 1,
          label: {
            show: true,
            formatter: '{b}'
          },
          itemStyle: {
            borderColor: '#fff'
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Treemap Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function SunburstChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Sunburst Chart', left: 'center' },
      series: [
        {
          type: 'sunburst',
          data: [
            {
              name: 'Root',
              children: [
                {
                  name: 'Branch A',
                  value: 15,
                  children: [
                    { name: 'A1', value: 5 },
                    { name: 'A2', value: 10 }
                  ]
                },
                {
                  name: 'Branch B',
                  value: 25,
                  children: [
                    { name: 'B1', value: 10 },
                    { name: 'B2', value: 15 }
                  ]
                },
                {
                  name: 'Branch C',
                  value: 30,
                  children: [
                    { name: 'C1', value: 12 },
                    { name: 'C2', value: 18 }
                  ]
                }
              ]
            }
          ],
          radius: [0, '90%'],
          label: {
            rotate: 'radial'
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Sunburst Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function GraphChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Force Directed Graph', left: 'center' },
      tooltip: {},
      series: [
        {
          type: 'graph',
          layout: 'force',
          symbolSize: 50,
          roam: true,
          label: {
            show: true
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          data: [
            { name: 'Node 1', x: 300, y: 300 },
            { name: 'Node 2', x: 800, y: 300 },
            { name: 'Node 3', x: 550, y: 100 },
            { name: 'Node 4', x: 550, y: 500 },
            { name: 'Node 5', x: 400, y: 200 },
            { name: 'Node 6', x: 700, y: 200 }
          ],
          links: [
            { source: 'Node 1', target: 'Node 2' },
            { source: 'Node 1', target: 'Node 3' },
            { source: 'Node 2', target: 'Node 3' },
            { source: 'Node 2', target: 'Node 4' },
            { source: 'Node 3', target: 'Node 5' },
            { source: 'Node 4', target: 'Node 6' },
            { source: 'Node 5', target: 'Node 6' }
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          },
          force: {
            repulsion: 100
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Graph Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function SankeyChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Sankey Diagram', left: 'center' },
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'sankey',
          layout: 'none',
          emphasis: {
            focus: 'adjacency'
          },
          data: [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' },
            { name: 'd' },
            { name: 'e' },
            { name: 'f' }
          ],
          links: [
            { source: 'a', target: 'b', value: 5 },
            { source: 'a', target: 'c', value: 3 },
            { source: 'b', target: 'd', value: 8 },
            { source: 'b', target: 'e', value: 3 },
            { source: 'c', target: 'e', value: 4 },
            { source: 'd', target: 'f', value: 6 },
            { source: 'e', target: 'f', value: 6 }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Sankey Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function FunnelChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Funnel Chart', left: 'center' },
      tooltip: { trigger: 'item', formatter: '{b}: {c}' },
      legend: { bottom: 0 },
      series: [
        {
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: [
            { value: 100, name: 'Visit' },
            { value: 80, name: 'Interest' },
            { value: 60, name: 'Consideration' },
            { value: 40, name: 'Intent' },
            { value: 20, name: 'Purchase' }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Funnel Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function BoxplotChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Boxplot Chart', left: 'center' },
      tooltip: { trigger: 'item', axisPointer: { type: 'shadow' } },
      grid: { left: '10%', right: '10%', bottom: '15%' },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        boundaryGap: true,
        splitArea: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitArea: {
          show: true
        }
      },
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          data: [
            [850, 740, 900, 1070, 930],
            [960, 940, 960, 990, 1060],
            [880, 880, 880, 880, 880],
            [890, 810, 810, 820, 850],
            [900, 820, 820, 830, 890]
          ],
          tooltip: {
            formatter: (param: any) => {
              return [
                'Group ' + param.name + ': ',
                'Upper: ' + param.data[5],
                'Q3: ' + param.data[4],
                'Median: ' + param.data[3],
                'Q1: ' + param.data[2],
                'Lower: ' + param.data[1]
              ].join('<br/>')
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Boxplot Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function HeatmapChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
      '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p']
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const data = []
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 24; j++) {
        data.push([j, i, Math.floor(Math.random() * 100)])
      }
    }

    const option = {
      title: { text: 'Heatmap Chart', left: 'center' },
      tooltip: { position: 'top' },
      grid: { height: '50%', top: '15%' },
      xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%'
      },
      series: [
        {
          type: 'heatmap',
          data: data,
          label: {
            show: false
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Heatmap Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function ParallelChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Parallel Coordinates', left: 'center' },
      parallelAxis: [
        { dim: 0, name: 'Price' },
        { dim: 1, name: 'Weight' },
        { dim: 2, name: 'Volume' },
        { dim: 3, name: 'Rating' }
      ],
      parallel: {
        left: '10%',
        right: '13%',
        bottom: 100,
        parallelAxisDefault: {
          type: 'value',
          nameLocation: 'end',
          nameGap: 20
        }
      },
      series: [
        {
          type: 'parallel',
          lineStyle: {
            width: 2
          },
          data: [
            [12.99, 100, 82, 4.5],
            [9.99, 80, 77, 3.8],
            [20, 120, 86, 4.8],
            [7.99, 60, 72, 3.2],
            [15, 90, 80, 4.2],
            [18, 110, 85, 4.6]
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Parallel Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function GaugeChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Gauge Chart', left: 'center' },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '75%'],
          radius: '90%',
          min: 0,
          max: 100,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 14,
            distance: -60
          },
          title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
          },
          detail: {
            fontSize: 30,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            color: 'inherit'
          },
          data: [
            {
              value: 72.5,
              name: 'Performance'
            }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Gauge Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function ThemeRiverChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data = []
    for (let i = 0; i < 10; i++) {
      data.push(['2015-01-0' + (i + 1), Math.random() * 300, 'Category A'])
      data.push(['2015-01-0' + (i + 1), Math.random() * 200, 'Category B'])
      data.push(['2015-01-0' + (i + 1), Math.random() * 250, 'Category C'])
    }

    const option = {
      title: { text: 'ThemeRiver Chart', left: 'center' },
      tooltip: { trigger: 'axis', axisPointer: { type: 'line' } },
      legend: { data: ['Category A', 'Category B', 'Category C'], bottom: 0 },
      singleAxis: {
        top: 80,
        bottom: 80,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        axisPointer: {
          animation: true,
          label: {
            show: true
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            opacity: 0.2
          }
        }
      },
      series: [
        {
          type: 'themeRiver',
          emphasis: {
            itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
          },
          data: data
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="ThemeRiver Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function CalendarChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const getVirtualData = (year: string) => {
      const date = +echarts.time.parse(year + '-01-01')
      const end = +echarts.time.parse(+year + 1 + '-01-01')
      const dayTime = 3600 * 24 * 1000
      const data: [string, number][] = []
      for (let time = date; time < end; time += dayTime) {
        data.push([
          echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    }

    const option = {
      title: { text: 'Calendar Heatmap', left: 'center' },
      tooltip: {
        position: 'top',
        formatter: (p: any) => {
          const format = echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false)
          return format + ': ' + p.data[1]
        }
      },
      visualMap: {
        min: 0,
        max: 10000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 20
      },
      calendar: {
        top: 80,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2024',
        itemStyle: {
          borderWidth: 0.5
        },
        yearLabel: { show: false }
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtualData('2024')
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Calendar Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function MapChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    // Simple world map using geo component
    const option = {
      title: { text: 'Basic Map', left: 'center' },
      tooltip: { trigger: 'item' },
      geo: {
        map: 'world',
        roam: true,
        itemStyle: {
          areaColor: '#e0e0e0',
          borderColor: '#fff'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#FFD700'
          }
        }
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          data: [
            { name: 'New York', value: [-74.006, 40.7128, 100] },
            { name: 'London', value: [-0.1276, 51.5074, 80] },
            { name: 'Tokyo', value: [139.6917, 35.6895, 120] },
            { name: 'Sydney', value: [151.2093, -33.8688, 90] }
          ],
          symbolSize: (val: number[]) => val[2] / 5,
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }
      ]
    }

    // Register a simple world map
    echarts.registerMap('world', {
      type: 'FeatureCollection',
      features: []
    } as any)

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Map Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function GeoScatterChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data = [
      { name: 'Point 1', value: [120, 30, 100] },
      { name: 'Point 2', value: [-74, 40, 80] },
      { name: 'Point 3', value: [0, 51, 120] },
      { name: 'Point 4', value: [139, 35, 90] }
    ]

    const option = {
      title: { text: 'Geo Scatter Chart', left: 'center' },
      tooltip: {
        trigger: 'item'
      },
      geo: {
        map: 'world',
        roam: true,
        itemStyle: {
          areaColor: '#f3f3f3',
          borderColor: '#999'
        }
      },
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: data,
          symbolSize: (val: number[]) => val[2] / 5,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          itemStyle: {
            color: '#b02a02',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      ]
    }

    echarts.registerMap('world', {
      type: 'FeatureCollection',
      features: []
    } as any)

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Geo Scatter Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function GeoLinesChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Geo Lines Chart', left: 'center' },
      geo: {
        map: 'world',
        roam: true,
        itemStyle: {
          areaColor: '#323c48',
          borderColor: '#111'
        }
      },
      series: [
        {
          type: 'lines',
          coordinateSystem: 'geo',
          polyline: false,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 8
          },
          lineStyle: {
            color: '#a6c84c',
            width: 2,
            opacity: 0.6,
            curveness: 0.2
          },
          data: [
            {
              coords: [[-74, 40], [0, 51]]
            },
            {
              coords: [[0, 51], [139, 35]]
            },
            {
              coords: [[139, 35], [151, -33]]
            },
            {
              coords: [[151, -33], [-74, 40]]
            }
          ]
        }
      ]
    }

    echarts.registerMap('world', {
      type: 'FeatureCollection',
      features: []
    } as any)

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Geo Lines Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function Bar3DChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data: [number, number, number][] = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        data.push([i, j, Math.random() * 10])
      }
    }

    const option = {
      title: { text: '3D Bar Chart', left: 'center' },
      tooltip: {},
      visualMap: {
        max: 10,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      xAxis3D: {
        type: 'category',
        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      },
      yAxis3D: {
        type: 'category',
        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
          projection: 'orthographic'
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        }
      },
      series: [
        {
          type: 'bar3D',
          data: data,
          shading: 'lambert',
          label: {
            show: false
          },
          emphasis: {
            label: {
              fontSize: 16,
              color: '#900'
            },
            itemStyle: {
              color: '#900'
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="3D Bar Chart">
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </ChartContainer>
  )
}

function Scatter3DChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data: [number, number, number][] = []
    for (let i = 0; i < 200; i++) {
      data.push([
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ])
    }

    const option = {
      title: { text: '3D Scatter Chart', left: 'center' },
      tooltip: {},
      xAxis3D: {
        type: 'value'
      },
      yAxis3D: {
        type: 'value'
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        viewControl: {
          projection: 'perspective',
          autoRotate: true
        }
      },
      series: [
        {
          type: 'scatter3D',
          data: data,
          symbolSize: 8,
          itemStyle: {
            opacity: 0.8
          },
          emphasis: {
            itemStyle: {
              color: '#f00'
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="3D Scatter Chart">
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </ChartContainer>
  )
}

function Surface3DChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data: [number, number, number][] = []
    for (let i = -30; i < 30; i++) {
      for (let j = -30; j < 30; j++) {
        const x = i / 10
        const y = j / 10
        const z = Math.sin(x) * Math.cos(y) * 10
        data.push([x, y, z])
      }
    }

    const option = {
      title: { text: '3D Surface Chart', left: 'center' },
      tooltip: {},
      visualMap: {
        show: false,
        dimension: 2,
        min: -10,
        max: 10,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      xAxis3D: {
        type: 'value'
      },
      yAxis3D: {
        type: 'value'
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        viewControl: {
          projection: 'perspective',
          autoRotate: true
        }
      },
      series: [
        {
          type: 'surface',
          wireframe: {
            show: false
          },
          equation: {
            x: { step: 0.1 },
            y: { step: 0.1 },
            z: (x: number, y: number) => Math.sin(x) * Math.cos(y) * 10
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="3D Surface Chart">
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </ChartContainer>
  )
}

function Lines3DChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const data: number[][] = []
    for (let i = 0; i < 50; i++) {
      const t = i / 10
      data.push([
        Math.sin(t) * 50,
        Math.cos(t) * 50,
        t * 10
      ])
    }

    const option = {
      title: { text: '3D Lines Chart', left: 'center' },
      tooltip: {},
      xAxis3D: {
        type: 'value'
      },
      yAxis3D: {
        type: 'value'
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        viewControl: {
          projection: 'perspective',
          autoRotate: true
        }
      },
      series: [
        {
          type: 'line3D',
          data: data,
          lineStyle: {
            width: 4
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="3D Lines Chart">
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </ChartContainer>
  )
}

function LiquidFillChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    // Simulating liquid fill with a custom gauge
    const option = {
      title: { text: 'Liquid Fill (Simulated)', left: 'center' },
      series: [
        {
          type: 'gauge',
          radius: '80%',
          startAngle: 0,
          endAngle: 360,
          center: ['50%', '50%'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          detail: {
            formatter: '{value}%',
            fontSize: 40,
            offsetCenter: [0, 0],
            color: '#fff'
          },
          data: [
            {
              value: 68,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#1e90ff'
                  },
                  {
                    offset: 1,
                    color: '#00bfff'
                  }
                ])
              }
            }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Liquid Fill Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function WordCloudChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    // Simulating word cloud with scatter
    const words = [
      'Apache', 'ECharts', 'Visualization', 'JavaScript', 'Canvas',
      'Data', 'Chart', 'Graph', 'Dashboard', 'Interactive',
      'Web', 'Frontend', 'React', 'Vue', 'Angular'
    ]

    const data = words.map((word, i) => ({
      name: word,
      value: [Math.random() * 100, Math.random() * 100, 20 + Math.random() * 80]
    }))

    const option = {
      title: { text: 'Word Cloud (Simulated)', left: 'center' },
      tooltip: {},
      xAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 100
      },
      yAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 100
      },
      series: [
        {
          type: 'scatter',
          symbolSize: (val: number[]) => val[2],
          data: data,
          label: {
            show: true,
            formatter: '{b}',
            color: '#000',
            fontSize: (params: any) => params.data.value[2] / 3
          },
          itemStyle: {
            opacity: 0.8,
            color: () => {
              return 'rgb(' + [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
              ].join(',') + ')'
            }
          }
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Word Cloud Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function PictorialBarChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Pictorial Bar Chart', left: 'center' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'pictorialBar',
          symbol: 'diamond',
          symbolRepeat: true,
          symbolSize: ['80%', '60%'],
          symbolMargin: '5%',
          data: [
            {
              value: 123,
              itemStyle: { color: '#c23531' }
            },
            {
              value: 60,
              itemStyle: { color: '#2f4554' }
            },
            {
              value: 25,
              itemStyle: { color: '#61a0a8' }
            },
            {
              value: 18,
              itemStyle: { color: '#d48265' }
            },
            {
              value: 12,
              itemStyle: { color: '#91c7ae' }
            }
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Pictorial Bar Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}

function CustomChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    const chart = echarts.init(chartRef.current)

    const option = {
      title: { text: 'Custom Series with Animation', left: 'center' },
      tooltip: {},
      xAxis: {
        type: 'value',
        min: 0,
        max: 100
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100
      },
      series: [
        {
          type: 'custom',
          renderItem: (params: any, api: any) => {
            const x = api.value(0)
            const y = api.value(1)
            const point = api.coord([x, y])

            return {
              type: 'circle',
              shape: {
                cx: point[0],
                cy: point[1],
                r: 20
              },
              style: {
                fill: 'rgba(0, 180, 231, 0.5)',
                stroke: '#00b4e7',
                lineWidth: 2
              },
              keyframeAnimation: [
                {
                  duration: 1000,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.5,
                      scaleX: 0.1,
                      scaleY: 0.1,
                      easing: 'cubicIn'
                    },
                    {
                      percent: 1,
                      scaleX: 1,
                      scaleY: 1,
                      easing: 'cubicOut'
                    }
                  ]
                }
              ]
            }
          },
          data: [
            [20, 30],
            [40, 50],
            [60, 70],
            [80, 40],
            [30, 80]
          ]
        }
      ]
    }

    chart.setOption(option)
    return () => chart.dispose()
  }, [])

  return (
    <ChartContainer title="Custom Chart">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </ChartContainer>
  )
}
