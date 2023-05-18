import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="container mx-auto mt-20">
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Motorcycles</Tab>
          <Tab>stylish car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            praesentium alias soluta excepturi, quibusdam ea veniam animi
            obcaecati nemo architecto non dolorum, consequuntur quasi mollitia
            eum laborum distinctio consequatur eos. Veniam modi sunt illo,
            consequatur aliquam incidunt in amet, vero minus fugiat voluptatem
            earum ea harum consectetur. Quod beatae sequi corrupti rem magnam
            incidunt ipsam nam ea inventore. Vel voluptas neque amet unde
            accusantium in ex similique itaque nobis provident aspernatur
            nostrum, ipsa numquam necessitatibus inventore temporibus et ipsam
            cupiditate. Voluptates, nesciunt, eveniet nihil repudiandae adipisci
            illo magni voluptatum rerum eos ipsum repellendus, quisquam
            obcaecati quaerat ad dolorem alias quos. Voluptatem non neque ipsa
            temporibus. Possimus architecto velit adipisci aspernatur error!
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            praesentium alias soluta excepturi, quibusdam ea veniam animi
            obcaecati nemo architecto non dolorum, consequuntur quasi mollitia
            eum laborum distinctio consequatur eos. Veniam modi sunt illo,
            consequatur aliquam incidunt in amet, vero minus fugiat voluptatem
            earum ea harum consectetur. Quod beatae sequi corrupti rem magnam
            incidunt ipsam nam ea inventore. Vel voluptas neque amet unde
            accusantium in ex similique itaque nobis provident aspernatur
            nostrum, ipsa numquam necessitatibus inventore temporibus et ipsam
            cupiditate. Voluptates, nesciunt, eveniet nihil repudiandae adipisci
            illo magni voluptatum rerum eos ipsum repellendus, quisquam
            obcaecati quaerat ad dolorem alias quos. Voluptatem non neque ipsa
            temporibus. Possimus architecto velit adipisci aspernatur error!
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            praesentium alias soluta excepturi, quibusdam ea veniam animi
            obcaecati nemo architecto non dolorum, consequuntur quasi mollitia
            eum laborum distinctio consequatur eos. Veniam modi sunt illo,
            consequatur aliquam incidunt in amet, vero minus fugiat voluptatem
            earum ea harum consectetur. Quod beatae sequi corrupti rem magnam
            incidunt ipsam nam ea inventore. Vel voluptas neque amet unde
            accusantium in ex similique itaque nobis provident aspernatur
            nostrum, ipsa numquam necessitatibus inventore temporibus et ipsam
            cupiditate. Voluptates, nesciunt, eveniet nihil repudiandae adipisci
            illo magni voluptatum rerum eos ipsum repellendus, quisquam
            obcaecati quaerat ad dolorem alias quos. Voluptatem non neque ipsa
            temporibus. Possimus architecto velit adipisci aspernatur error!
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
