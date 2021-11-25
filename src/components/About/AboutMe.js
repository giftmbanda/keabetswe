import master from "../../master";
import "./About.css";
function AboutMe() {
	return (
		<>
			{/* ABOUT ME SECTION */}
			<section className="about" id="about">
				<div className="container">
					<h2 className="title">About Me</h2>
					<div className="about-content">
						<div className="column left">
							{/* <img
								id="profile-pic"
								src="https://eshendetesia.com/images/patients-profile/df2ec810d9f7ff5296feba451a74ca2b.png"
								alt="avatar"
								height="150px"
							/> */}
						</div>
						<div className="column right">
							<div className="text">
								<h2>
									I am {master.firstname} {master.lastname} and I am a{" "}
									<h3 id="whoIam" className="whoIam">
										{" "}
										{master.about.whoIam}.
									</h3>
								</h2>
							</div>
							<p>I am passionate about applying my acquired skills in solving real life problems. I believe SovTech is the perfect organization to explore my creativity since learning and innovation are  listed as your core values.</p>
							<a href="mailto:diana.k.mosehla@gmail.com">
								<button className="resumeButton">Request CV</button>
							</a>
						</div>
					</div>
				</div>
			</section>
			<hr></hr>
		</>
	);
}

export default AboutMe;
