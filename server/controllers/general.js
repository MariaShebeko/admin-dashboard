import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);

    if (!result) {
      const error = new Error(`User with id-${id} not found`);
      error.status = 404;
      throw error;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    // Recent Transactions
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    // Overall Stats
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      dailyData,
      salesByCategory,
    } = overallStat[0];

    const currentMonthData = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const currentDayData = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      dailyData,
      salesByCategory,
      currentMonthData,
      currentDayData,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
