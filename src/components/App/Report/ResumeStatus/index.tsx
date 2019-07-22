import * as React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
/* Native Base Components */
import { Card, CardItem, Text, Body, Icon, Right, Button } from "native-base";
/* Types */
import { DailyReport } from "../../../../types";
import { colors } from "../../../../constants";

export interface LayoutProps {}

const ResumeStatus = ({  }: LayoutProps) => {
  const dailyReportList = useSelector((state: any) => state.dailies.reports);
  const wasDailyReportMade = getWasDailyReportMade(dailyReportList);

  return (
    <Card style={styles.cardContainer}>
      <CardItem header bordered>
        <Icon
          type="FontAwesome5"
          name={wasDailyReportMade ? "check" : "info-circle"}
          fontSize={10}
          style={
            wasDailyReportMade ? styles.infoIconSuccess : styles.infoIconError
          }
        />
        <Text>Daily report status</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>Did you already do your daily report?</Text>
        </Body>
        <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button transparent icon disabled={!wasDailyReportMade}>
            <Icon
              type="FontAwesome5"
              name="copy"
              style={[
                styles.actionIcon,
                wasDailyReportMade ? null : styles.actionIconDisabled
              ]}
            />
          </Button>
          <Button transparent icon disabled={!wasDailyReportMade}>
            <Icon
              type="FontAwesome5"
              name="share-alt"
              style={[
                styles.actionIcon,
                wasDailyReportMade ? null : styles.actionIconDisabled
              ]}
            />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );

  function getWasDailyReportMade(reportList: DailyReport[]) {
    return reportList.some(
      daily =>
        moment(daily.date, "DD-MM-YYYY HH:mm").format("DD-MM-YYYY") ===
        moment().format("DD-MM-YYYY")
    );
  }
};

ResumeStatus.defaultProps = {};

export default ResumeStatus;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10
  },
  infoIconSuccess: {
    color: colors.primaryColor
  },
  infoIconError: {
    color: colors.dangerColor
  },
  actionIcon: {
    color: colors.primaryColor,
    marginLeft: 15,
    fontSize: 30
  },
  actionIconDisabled: {
    color: colors.disabledColor
  }
});
