import { process } from "../../../env";
import { Configuration, OpenAIApi } from "openai";
import { RiSendPlane2Line } from "react-icons/ri";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React from "react";

export default function GPT(props) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const toast = useToast();

  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const [loader, setLoader] = React.useState(false);
  async function fetchReply() {
    if (value) {
      setLoader(true);
      props.setPlaceholder("Wait! Your query is being processed.....👍🏻")
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `user: Write a leave application for school
            response: To Principal
            [School name],
            [School address]
            Date: [Date]
            
            Subject: Application for [Your reason]
            
            Sir/ Ma'am,
            
            I would like to bring to your notice that I, Anukriti Gupta of class 10th-C will not be able to attend school for the coming 3 days as I have to go out of the station to attend my cousin’s wedding in Dehradun. 
            
            I would kindly request you grant me leave for the 12th, 13th, and 14th of April 2021. I will be highly obliged. 
            
            Your's truly,
            [Your Name],
            [Your class]

            ###
            user: Write an article on Modi's visit to the US
            response: Title: Modi's Visit to the US: Strengthening Bilateral Ties and Global Collaboration

            Indian Prime Minister Narendra Modi's visit to the United States marked a significant step in strengthening bilateral relations and addressing global challenges. The visit focused on enhancing strategic partnerships, boosting trade and economic collaboration, addressing climate change, and promoting global health cooperation. Additionally, efforts were made to foster people-to-people exchanges, creating a foundation for a stronger Indo-U.S. partnership.
            
            During the visit, Prime Minister Modi met with President Joe Biden and engaged in discussions on defense, security, counterterrorism, and trade. Both leaders aimed to revitalize economic cooperation, resolve trade disputes, and promote investments and technology transfers. Climate change and renewable energy were also key topics, with commitments made to combatting global warming and advancing clean energy technologies.
            
            The visit emphasized collaboration in responding to the COVID-19 pandemic. India's role in vaccine production and distribution was acknowledged, leading to discussions on strengthening the global vaccine supply chain and supporting vaccination efforts in developing countries.
            
            Efforts were made to strengthen people-to-people ties, including engaging with the Indian diaspora in the United States and promoting educational and cultural exchanges. Streamlining visas and promoting understanding between the two nations were key goals.
            
            In conclusion, Prime Minister Modi's visit bolstered the strategic partnership between India and the United States, advancing cooperation in defense, trade, climate change, and public health. The visit laid the groundwork for a stronger Indo-U.S. alliance committed to global stability, prosperity, and collaboration.

            ###
            user: Write the summary of the poem
            response: A Photograph Summary in English
            The poem begins when the poetess goes through her mother's photo that lay within the cardboard boxes. They were possibly uncared for some time. In addition, it is not in any frame, metal, etc. So, the poetess portrays it as being susceptible to forces of decay. In the photo poetess's mother seem edged by her siblings, who are younger than her. Also, she highlights her mother strength as she supports her young cousins.
            
            They all look into the camera when their brother/uncle photograph them. Moreover, they look happy and excited with their throwing locks and pleasant smiles. Further, the picture shows the sea waves smashing at them as the young girls learn to keep up with the waves. She (poetess) remains with the thought that sea. Even in motion, her mother (motionless in the photograph) is able to resist the change as she has surrendered herself to mortality.
            
            In the second part/phase, in her older days, her mother looks back the day at the sea. Moreover, she remembers her two cousins and recalls the day memorialized in the photograph. Also, she makes fun of her and her cousins’ outfits. These lines have a tone of sadness as the mother tries to accept the continual motion of life as she grows older. Looking back at her 12-years-old self maybe was an attempt to return to her childhood, which is a painful reminder of time and age.
            
            In the third part, the poetess remembering her mother as she died earlier.  Further, the photo scripts a memory for both. As it knots the mother and daughter together even after her mother has left her for forever. The poetess confesses that the photo bliss at imagining her mother's laughter much like her mother delight in remembering the day at the sea.
            
            Moreover, she notices that the time over since her mother's final departure is the same as her age in the photograph i.e., 12 years. Maybe it's a coincidence or an irony of life and death. Eventually, both poetess and her mother learn to accept the change and make peace with their memories. Even though they remind them of the briefness of laughter, happy moment, etc.
            
            Although the death or end makes things go quiet and empty. However, the poetess, find her mother died to be loud and inspiring enough to pour her feelings out in the form of a tribute and poem. Thus, even though death finishes everything. But her mother's death brings out a new response in her. Lastly, she accepts (silently) her resignation to the final silence of death.
            
            Conclusion of a Photograph Summary
            In a photograph summary, the poetess wants to say that death is unavoidable so embrace your life.

            ###
            user:${value}
            response:
            `,
        max_tokens: 700,
      });
      const answer = response.data.choices[0].text.trim();
      props.setValue(answer);
      setLoader(false);
      props.setPlaceholder("🤖Prompt the AI.....")
      setValue("");
    } else {
        toast({
            title: "Input field is Empty",
            status: "error",
            position: "top-left",
            isClosable: true
        })
    }
  }

  return (
    <>
      <div className="flex w-[80%] mx-auto mt-40">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Write an essay on AIs"
          size="sm"
          padding={"2rem"}
          borderRadius={"8px"}
          borderRight={"none"}
          borderTopRightRadius={"0px"}
          borderBottomRightRadius={"0px"}
          color={"white"}
          backgroundColor={"#394867"}
          border={"none"}
        />
        <Button
          isLoading={loader}
          colorScheme="teal"
          variant="solid"
          padding={"2rem"}
          borderTopLeftRadius={"0px"}
          borderBottomLeftRadius={"0px"}
          onClick={fetchReply}
          fontSize={"30px"}
        >
          <RiSendPlane2Line />
        </Button>
      </div>
    </>
  );
}
