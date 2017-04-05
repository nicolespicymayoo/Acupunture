import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Header from './header'
import Why from './why'
import Treatments from './treatments'
import Techniques from './techniques'
import Doctor from './doctor'
import Pricing from './pricing'
import Testimonials from './testimonials'
import Contact from './contact'

export default () => (
<div>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <script>
      {/*{function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      }}(window,document,'script','//www.google-analytics.com/analytics.js','ga');*/}

      ga('create', 'UA-62228480-1', 'auto');
      ga('send', 'pageview');
    </script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    <link href='http://fonts.googleapis.com/css?family=Source+Serif+Pro:300,400,600' rel='stylesheet' />
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,500,700' rel='stylesheet' />
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.0/slick.min.js"></script>
    <title>Jing Jiang Acupuncture & Herb Clinic | Over 20 Years Of Experience in Acupuncture and Chinese Medicine</title>
     <style>{`
        html, body {
          font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
          font-size: 16px;
          color: #373b4c;
          margin: 0;
          height: 100%;
        }
        p, h1, h2, h3 {
          margin: 0;
          padding: 0;
        }
      `}
    </style>
    <meta name="description" content="Jing Jiang Acupuncture & Herbs Clinic is located in Stamford, CT and New York, NY. We provide acupuncture and chinese medicine services to our clients in Fairfield County, CT and New York, NY. We provide infertility support, traditional acupuncture, Chinese herbs, acupuncture for pain and migraines."/>
    <meta name="keywords" content="Acupuncture, Stamford, Westport, Greenwich, Norwalk, Fairfield County, CT, Connecticut, White Plains, Harrison, Westchester County, NY, New York, Manhattan, facial lift, menopause, infertility treatment, pain, migraines, Chinese herbs"/>
  </Head>
  <Main>
    <Header />
    <Why />
    <Treatments />
    <Techniques />
    <Doctor />
    <Pricing />
    <Testimonials />
    <Contact />
  </Main>
</div>
)

const Main = styled.div`
  font-family: 'Lato';
  letter-spacing: .2px;
`