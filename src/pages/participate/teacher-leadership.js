import React from 'react'
import Layout from 'components/layout'
import teacherRepImage from 'components/images/Teacher-Reps.jpg'

const TeacherLeadership = () => (
  <Layout title="Teacher Leadership">
    <main>
      <div className="container px-5 region-content">
        <h1>Teacher Leadership</h1>

        <p style={{ marginBottom: '2rem' }}>For New Haven schools, teachers represent their colleagues in planning, organizing, and conducting the program.
        This ensures that teachers may have a direct role in designing the Institute to meet their own needs for further
        preparation and the needs of their students, and to support school plans that implement district academic standards.</p>

        <p style={{ marginBottom: '2rem' }}>Between September and December of each year, the teachers who serve as School Representatives
        canvass their colleagues and determine the topics they would like the Institute to cover. The Institute organizes
        seminars that address teachers' interests. Representatives work throughout the year within their respective schools
        and with their colleagues in other schools; they meet together at least twice monthly from September until
        February. The Steering Committee supports and oversees the work of the Representatives.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: "clamp(15ch, calc(1/2 * 100% - 1rem), 100%)", flexGrow: 1 }}>
            <p><strong>Steering Committee</strong></p>
            <p>Carol Boynton, Edgewood Creative Thinking through</p>
            <p>STEAM Magnet School</p>

            <p style={{ marginTop: '2rem' }}><strong>School Representatives</strong></p>
            <p>Rita Begines-Cid, Hillhouse High School</p>
            <p>Nancy Bonilla, Roberto Clemente Leadership Academy</p>
            <p>Lisa Finch, Ross Woodward School</p>
            <p>Jaimee Mendillo, Nathan Hale School</p>
            <p>Kasalina Nabakooza, Truman School</p>
            <p>Matthew Schaffer, Engineering and Science School</p>
            <p>Stephanie Smelser, Worthington Hooker School</p>
          </div>

          {/*<img src={teacherRepImage} alt="Teacher Reps" style={{ width: "clamp(15ch, calc(1/2 * 100%), 100%)", flexGrow: 1, objectFit: 'cover' }} />*/}
        </div>

        <p><strong>Seminar Coordinators</strong></p>

        <p>A teacher acts as Coordinator of each seminar to provide teacher leadership and help maintain collegial rapport
        within the group. Coordinators are selected in January and serve through July, resolving any scheduling or other
        problems and facilitating the smooth operation of the seminars. On the recommendation of the Coordinators, the
        Director may withdraw from the Institute any Fellow whose continued participation they deem to be detrimental to
        the program.</p>
      </div>
    </main>
  </Layout>
)

export default TeacherLeadership
