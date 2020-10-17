import { createStyles, makeStyles, Box, Typography, Container, Button } from '@material-ui/core';
import React from 'react';

const Blog = () => {
    const classes = useStyles()
    const clickeffect = () => {
        var dots = document.getElementById("dots");
        var moretext = document.getElementById("more");
        var mybtn = document.getElementById("mybtn");

        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            moretext.style.display = 'none';
            mybtn.innerHTML = "Learn More";
        }
        else {
            dots.style.display = 'none';
            moretext.style.display = 'inline';
            mybtn.innerHTML = "Read Less";
        }
    }

    return (
        <div className={classes.blog}>
            <div className={classes.blog1}>
                <Box>
                    <Container>
                        <Typography style={{ textAlign: "center", fontSize: "22px", fontWeight: "700px", paddingBottom: "2%" }}>
                            BABY'S HEALTH IS IN PARENTS HAND
                        </Typography>
                        <Typography>
                            Parents love their kids more than anything because thats the beautiful thing ever happened in their life .loving anything in excessive amount means to take take and give protection to them .so,children safety and health is parents main cocern.The last decade has seen the rise of parenting as an individual endeavour, which can place crushing pressure for parents to always be at their best.When it comes to preparing for your new baby whether it’s your first or your third there’s so much baby gear out there to choose from. And while every baby and family is different, some products definitely rise to the top.So,what gear to choose is a big question for the parents .In that situation we come in  for to help you and your baby for everything baby needs from pregnancy to childhood .we provide the best product for your baby that baby needs in everything step of their childhood .so parents should always have to deal what best for their child .Their duty is no match for any other jobs in their world .If a baby is healthy ,it is only because of the parenting gone well .Parents  should be aware of the every products that children consumes .Every child gears is called as baby's product while it  shoild be called as parents  choosed products.Parents are responsible for every products that a child consumes .
                        </Typography>
                    </Container>
                </Box>

            </div>
            <div className={classes.blog2}>
                <Box  >
                    <Container>
                        <Typography style={{ textAlign: "center", fontSize: "22px", fontWeight: "700px", paddingBottom: "2%" }}>
                            PREGNANCY GEAR
                        </Typography>
                        <Typography>
                            AAAAH! You’re pregnant! This is amazing and wonderful and also OMG brace yourself because you’re about to get absolutely flooded with advice. Some will be good, some will be garbage, and a significant portion of it will come from people who have good intentions, but lack tact/common sense/the understanding that discussing your cervix while waiting in line for coffee IS NOT COOL. Here’s a smattering of the most common things we will tell you in this course of time .Think about what you’re eating, but don’t obsess because your body is going to do what it’s going to do.Nutrition and pregnancy refers to the nutrient intake, and dietary planning that is undertaken before, during and after pregnancy. Nutrition of the fetus begins at conception. For this reason, the nutrition of the mother is important from before conception (probably several months before) as well as throughout pregnancy and breast feeding. An ever-increasing number of studies have shown that the nutrition of the mother will have an effect on the child, up to and including the risk for cancer, cardiovascular disease, hypertension and diabetes throughout life.
                            so in this case we provide you all the nutrients that you will need during pregnancy with our simple recommedated products.Some of our products like pregnancy pillow ,hot water bag ,irons will help you during your rough times .
                        </Typography>
                    </Container>
                </Box>
            </div>
            <div className={classes.blog3}>
                <Box  >
                    <Container>
                        <Typography style={{ textAlign: "center", fontSize: "22px", fontWeight: "700px", paddingBottom: "2%" }}>
                            BABY PRODUCT SAFETY STANDARDS
                        </Typography>
                        <Typography>
                            If you’ve ever wondered who’s in charge of making sure the products you’re using on your baby are safe, you’re not alone. The information around baby product safety is ever-evolving, and sometimes a product parents swear is a lifesaver one day is considered a ticking diaper bomb the next. If you’re in the dark about what acronyms like “ASTM”, “CPSC”, “JPMA” and “AAP” stand for and what in the sweet hell they’ve got to do with baby safety, we’ve done some digging so you don’t have to.Let’s take a peek at who they are and what they do.
                            American Academy of Pediatrics (AAP)
                            The American Academy of Pediatrics was created in 1930 with the aim to keep young people mentally, physically, and socially healthy. Currently, 67,000 pediatricians in the United States, Canada, Mexico and beyond are members.
                            The AAP has over 30 committees that develop positions and programs on topics like injury and poison prevention, nutrition, and more. They work alongside Congress, the Administration and the judicial system to weigh in on child health issues and make recommendations on child safety legislation. Their partner website, healthychildren.org has information for parents on topics like safety, prevention and healthy living.
                            Consumer Products Safety Commission (CPSC)
                            The Consumer Products Safety Commission is the federal agency that aims to protect us and our kids from unreasonable risks of injury or death from the products we use. The CPSC keeps consumers and manufacturers informed on safety standards and product regulations. They also enforce the regulations that they’ve set. When consumers make complaints about a product, the CPSC hangs onto them and looks for patterns (like, does a particular product have a lot of complaints about kids getting their fingers caught in one of its parts?) They use that information to create new or revised standards that relate to that product. The CPSC is also in charge of product bans and recalls.
                            American Society of Testing and Materials (ASTM)
                            The American Society of Testing and Materials is a not-for-profit organization that develops and sets standards for consumer products. They often expand on existing mandatory government standards.
                            The U.S. juvenile products industry has been using ATSM guidelines for over 20 years to set safety standards on those products.
                            . The ASTM looks at the ways consumers use (and misuse) products to set standards and create warning labels for them.
                        </Typography>
                    </Container>

                </Box>
            </div>
            <div className={classes.blog4}>
                <Box  >
                    <Container>
                        <Typography style={{ textAlign: "center", fontSize: "22px", fontWeight: "700px", paddingBottom: "2%" }}>
                            NEW BABY ESSENTIALS
                        </Typography>
                        <Typography>
                            There’s a lot you can buy for your baby. And there’s a lot you really don’t need! Admittedly, I have made my share of useless purchases in the past (for example, a nappy trash can which produces giant nappy sausages). Now, expecting our fifth baby, I think I have more of an idea of what I really need. And, I had given away most of my new baby essentials after baby Casper, so now I have to get them all over again. Taking money and space into account, I’m more picky of what I really need…
                            So here’s my list of new baby essentials that I think are crucial (or at least very handy) to have the first weeks. Remembering: less is more, and simple is best! : )<span id="dots"> .....</span>
                            <span id="more">
                                New baby essentials: CLOTHES
                                White envelope onesies (size 1 month). The envelope opening is the easiest when babies are curled up and tiny.
                                Baby hats, a few different thicknesses, styles and sizes
                                For winter: a warm, all-over suit for taking baby outside.
                                Long knitted socks and/or booties, newborn size.
                                White pyjamas (Size NB and 1 month). The simple white style is so sweet. All my babies have worn these the first 2 years of their lives!
                                A few little outfits, size NB and/or 1 month. I like these cute little overalls with feet for the first weeks! A little knitted baby cardigan is handy too.
                                New baby essentials: CARE
                                Newborn nappies and wipes (I’m trying Naty and Lilydoo)
                                A cosy receiving blanket to keep baby warm
                                Baby shampoo and body wash, baby ointment, baby cream bath (I like this one from Weleda), and a nice baby massage oil
                                Baby nail clippers, saline water and a simple nose sucker to clear up a stuffed nose. And a soft baby hair brush if you expect your baby to have hair (I don’t!).
                                A few cosy hooded bath capes, hooded towel or blankets to wrap baby in after a bath
                                A (natural rubber) dummy (so far, all of my babies have used dummies!)
                                Muslin squares, XL muslin squares and muslin wash gloves. Also: burp cloths.
                                A Tummy Tub. So cute and my babies have all loved bathing in them! (They are also quite compact, compared to a regular baby bath.) I also use the sink, the first few weeks. (When baby gets bigger I like the folded Flexi Bath until they are sitting up confidently and can go into the ‘big bath’.)
                                New baby essentials: GEAR
                                A pushchair with rain cover and carseat attachment so you can click the carseat straight onto your pushchair. I have a Bugaboo Cameleon, but the new Bugaboo Fox looks cool too. I’ve heard great things about the BabyZen YoYo as well — so compact!
                                A baby carrier. I like the soft style wraps (slings) for newborns, initially.
                                Carseat with isofix base (so you can click it straight into the car — not an absolute necessity but SO fuss-free and handy!)
                                Bouncing chair with a cosy sheepskin cover (there are special sheepskins available fir this purpose, but you can also just buy a natural, non-bleached sheepskin and cut holes in it).
                                A cosy, washable cover or footmuff for the carseat.
                            Of course, as always, I’m curious to hear if you feel there are any new baby essentials I have missed, that you feel are essential for the first weeks!</span>

                        </Typography>
                        <Button onClick={clickeffect} id="mybtn">Learn More</Button>

                    </Container>
                </Box>
            </div>
            <div className={classes.blog5} >
                <Box  >
                    <Container>
                        <Typography style={{ textAlign: "center", fontSize: "22px", fontWeight: "700px", paddingBottom: "2%" }}>
                            BABY SKINCARE
                        </Typography>
                        <Typography>
                            Most babies are born with gorgeous, soft and delicate skin. To help keep it that way, it’s important to follow a simple skin care routineto help gently cleanse, nourish and hydrate your baby’s delicate skin. Until your baby turns two, their skin defense system is still developing, which is why their skin is more sensitive and vulnerable to damage. This also means that you have to be very careful about what you put on your baby’s skin. We put together a list of gentle baby skin care essentials that’ll help you care for your little one from head to toe.<span id="dots"> .....</span>
                            <span id="more">
                                Most babies are born with gorgeous, soft and delicate skin. To help keep it that way, it’s important to follow a simple skin care routineto help gently cleanse, nourish and hydrate your baby’s delicate skin. Until your baby turns two, their skin defense system is still developing, which is why their skin is more sensitive and vulnerable to damage. This also means that you have to be very careful about what you put on your baby’s skin. We put together a list of gentle baby skin care essentials that’ll help you care for your little one from head to toe.To help gently cleanse your baby’s delicate skin, you need an ultra-mild baby soap that cleanses skin ever-so-gently and helps preserve the skin’s natural moisture, leaving it soft and nourished. Based on your baby’s skin type, you can choose from our mild, hypoallergenic and dermatologically-tested baby bar soaps.
                                Tear-Free Baby Wash
                                A tear-free baby bath wash can make bath time so much easier and relaxed for both you and your baby. You can either pour it into your palm or pour some on a wet wash cloth to clean your baby’s body. Try the Softsens Tear-free Baby Wash that is enriched with a mild aqua-based tear-free formulation to prevent any skin or eye irritation during bath time. This 100% soap-free body wash is packed with natural milk cream & shea butter and is great for babies with sensitive skin as it gently cleanses without stripping the skin of its natural oils, leaving it perfectly soft and smooth.
                                Tear Free Baby Shampoo
                                You don’t need to shampoo your baby’s hair more than 2-3 times a week but their delicate strands do require extra-gentle care & cleansing.Ensure that you use a mild, tear-free baby shampoo that won’t sting your baby’s eyes during a bath. We recommend the Softsens Tear-free Baby Shampoo – a mild aqua-based shampoo that ensures gentle cleansing without leaving behind any residue. It has castor oil to strengthen roots and moisturize the scalp along with a conditioning agent to keep those sweet locks soft and tangle-free.This uniquely-formulated shampoo also has orange essential oil that helps infuse Vitamin C into your baby’s strands, to help stimulate hair growth and prevent hair loss.
                                Baby Powder
                                Constant diaper wearing can lead to excessive friction and moisture in your baby’s diaper region, which often leads to rashes, redness or irritation. However, you can help keep your baby’s diaper region cool, clean and dry with the help of a mild and gentle baby powder. Softsens Baby Powder is designed to absorb excess moisture and protect baby’s skin from rashes and irritation.
                                Massage oil
                                Right from strengthening baby’s bones and muscles, to relieving gassiness and calming your baby, a daily massage has countless benefits for your little one. Use this one-on-one time to bond with your baby and make it a part of your daily routine. Both moms & babies love our softsens baby calming massage oil which is a blend of 3 natural oils – olive, coconut and almond – that nourish, hydrate and condition your baby’s skin leaving it ultra-soft, smooth and supple. It’s also really light and non-sticky and quickly absorbs into your baby’s skin.
                                Baby Cream
                            Your baby’s sensitive skin does not have the ability to retain moisture the way that an adult’s skin does. This is why it’s important to moisturize your baby’s skin daily to help lock in moisture and keep it soft and healthy. Softsens Rich Moisturizing Cream hydrates baby’s skin from deep within, leaving it gorgeously soft and smooth. It is made from gentle yet powerful natural moisturizers like milk cream and shea butter that work together perfectly to nourish and hydrate skin. It is also packed with Vitamin E that helps keep skin hydrated for much longer and helps protect it from dryness and irritation.</span>
                        </Typography>
                        <Button onClick={clickeffect} id="mybtn">Learn More</Button>
                    </Container>
                </Box>
            </div>

        </div>
    )

};

const useStyles = makeStyles(theme =>
    createStyles({
        blog: {
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "60px",
            justifyContent: "center",
            marginLeft: "150px"
        },

        blog1: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f3f0",
            width: "fit-content",
            padding: "2%"
        },

        blog2: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f3f0",
            width: "fit-content",
            padding: "2%"
        },

        blog3: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f3f0",
            width: "fit-content",
            padding: "2%",
            "& #more": {
                display: "none",
            }
        },

        blog4: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f3f0",
            width: "fit-content",
            padding: "2%",
            "& #more": {
                display: "none",
            }

        },

        blog5: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f3f0",
            width: "fit-content",
            padding: "2%",
            "& #more": {
                display: "none",
            }
        },



    }));

export default Blog;