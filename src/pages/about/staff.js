import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import stephanie from 'components/images/staff/Stephanie.png'
import michael from 'components/images/staff/Michael.png'
import bethany from 'components/images/staff/Bethany.png'
import nick from 'components/images/staff/Nick.png'
import alexandra from 'components/images/staff/Alexandra.png'
import dan from 'components/images/staff/Dan.png'
import jonathan from 'components/images/staff/Jonathan.png'

const Staff = () => (
  <Layout title="Staff">
    <main>
      <div className="container px-5 region-content">
        <section style={{ marginBottom: '5rem' }}>
          <h1 className="page-title">Staff</h1>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(22ch, 1fr))', gap: '0rem 2rem' }}>
          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={nick} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Nicholas Coppola</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Database Administrator</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={michael} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem', objectPosition: '60% 0%' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Michael Hattem</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Associate Director</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={bethany} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Bethany Mead</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Senior Administrative Assistant</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={jonathan} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Jonathan Owens</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Web Developer</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={stephanie} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem', objectPosition: '50% 0%' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Stephanie Reid</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Director</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={dan} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem', objectPosition: '30% 0%' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Daniel Swann</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Program Administrator</p>
            </div>
          </article>

          <article style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', textAlign: 'center' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '11rem', height: '11rem' }}>
                <img src={alexandra} style={{ display: 'block', 'objectFit': 'cover', width: '11rem', height: '11rem', objectPosition: '50% 20%' }} />
              </div>

              <h2 style={{ marginTop: '1.5rem', marginBottom: '0' }}>Alexandra Varanelli</h2>
              <p style={{ fontWeight: 'bold', marginTop: '.5rem' }}>Social Media Strategist</p>
            </div>
          </article>
        </div>
       </div>
    </main>
  </Layout>
)
export default Staff
