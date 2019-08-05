import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* Native Base */
import { View, Button, Icon, Accordion, Text } from "native-base";
/* UI Components */
import LayoutHeader from "../../../UI/LayoutHeader";
import IssuesList from "./IssuesList";
import Modal from "react-native-modal";
/* Config */
import { getAccordionItems, issueAccordion } from "./config/issuesAccordion";
/* Utils */
import { useActions, useIsSelected } from "../../../../utils/hooks";
/* Redux Actions */
import { resetNewReport } from "../../../../redux/actions/dailies";

interface ReportButtonProps {}

function ReportButton({  }: ReportButtonProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [accordions, setAccordions] = useState<issueAccordion[]>([]);
  const resetNewReportAction = useActions(resetNewReport);
  const username = useSelector((state: any) => state.user.currentUsername);
  const { totals } = useIsSelected();

  useEffect(() => {
    setAccordions(getAccordionItems(username));

    return () => {
      handleCloseModal();
    };
  }, []);

  return (
    <View>
      <Button transparent onPress={() => setVisible(!visible)}>
        <Icon type="FontAwesome5" name="plus" />
      </Button>
      <Modal
        style={{ margin: 0, padding: 0, marginTop: 15, borderRadius: 10 }}
        swipeDirection="down"
        isVisible={visible}
        onSwipeComplete={handleCloseModal}
        animationInTiming={400}
        animationOutTiming={400}
      >
        <LayoutHeader
          title="What did you do today?"
          right={
            <Button onPress={handleCloseModal}>
              <Icon type="FontAwesome5" name="times" />
            </Button>
          }
          left={<Text style={{ color: "white" }}>{`(${totals})`}</Text>}
          footer={
            <Button block>
              <Text>Next</Text>
            </Button>
          }
        >
          <Accordion
            dataArray={accordions}
            renderContent={renderAccordionContent}
          />
        </LayoutHeader>
      </Modal>
    </View>
  );

  function renderAccordionContent(item: issueAccordion) {
    return <IssuesList {...item} />;
  }

  function handleCloseModal() {
    setVisible(false);
    resetNewReportAction();
  }
}

export default ReportButton;
