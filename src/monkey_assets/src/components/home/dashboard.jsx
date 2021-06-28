import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Chart from "react-apexcharts";

// Material
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import ContentNotLogged from "../contentNotLogged";


const useStyles = theme => ({
    app: {
        padding: '2rem'
    },
    title: {
        textAlign: 'center'
    },
    listChart: {
        display: 'flex',
        flexDirection: 'column',
    },
    chart: {
        padding: '2rem'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        },
    }
});

class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            title: 'DashBoard',
            series: [{
                name: 'Likes',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
                chart: {
                    redrawOnParentResize: true,
                    type: 'line'
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    text: 'Social Media',
                    align: 'left',
                    style: {
                        fontSize: "16px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                markers: {
                    size: 4,
                    colors: ["#FFA41B"],
                    strokeColors: "#fff",
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    min: -10,
                    max: 40,
                    title: {
                        text: 'Engagement',
                    },
                },

            },
            windowWidth: window.innerWidth - 159

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>
                <h1 className={classes.title}>Dashboard</h1>

                <div className={classes.content}>
                    <div className={classes.listChart}>
                        <div className={classes.chart}><Chart options={this.state.options} series={this.state.series} type="line" height={400} width={this.state.windowWidth < 959 ? '100%' : 400} /></div>
                        <div className={classes.chart}><Chart options={this.state.options} series={this.state.series} type="bar" height={400} width={this.state.windowWidth < 959 ? '100%' : 400} /></div>
                    </div>
                    <div className={classes.listChart}>
                        <div className={classes.chart}><Chart options={this.state.options} series={this.state.series} type="area" height={400} width={this.state.windowWidth < 959 ? '100%' : 400} /></div>
                        <div className={classes.chart}><Chart options={this.state.options} series={this.state.series} type="bubble" height={400} width={this.state.windowWidth < 959 ? '100%' : 400} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(DashBoard);
