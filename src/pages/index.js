import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import blockImg from "components/images/u18.png"


const HomePage = () => (
  <Layout>
   <main>
      <div class="container region-content">
        <div class="row">
        <div class="col-sm-8 mt-3"><h2>About the Institute</h2><p>The Yale-New Haven Teachers Institute is an educational partnership between 
        Yale University and the New Have Public Schools designed to strengthen teaching and learning in local schools and by example, in schools across the country.</p>
        <p>For more information about the Institute's operation in New Haven, please see our <Link to="#">2018 Annual Brochure.</Link></p>

        <h2>Curriculum Units by Fellows of the Institute</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
        </div>
        <div class="col-sm-4">
          <aside class="mb-2">
            <div class="p-3 mt-4 block-block">
              <h2 class="block-title">Lesson Plans</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </p>
              <Link class="btn btn-primary" to="#" role="button">Alternative Button</Link>
            </div>
            <div class="p-3 block-block mt-4">
              <p>For more information about the Institute's work nationally, please visit the <Link to="#">Yale National Initiative to strengthen teaching in public schools website.</Link></p>
            </div>
            <img src={blockImg} class="img-fluid" />
          </aside>
        </div>
        <div class="row">
        </div>
      </div>
      </div>
    </main>
  </Layout>  
)
export default HomePage

