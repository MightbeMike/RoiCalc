$(document).ready(function() {
    $('#calculateBtn').click(function() {
        const monthlySpend = parseFloat($('#monthlySpend').val());
        const monthsPaid = parseInt($('#monthsPaid').val());
        const extraTraffic = parseInt($('#extraTraffic').val());
        const conversionRate = parseFloat($('#conversionRate').val()) / 100;
        const averageOrderValue = parseFloat($('#averageOrderValue').val());

        if (isNaN(monthlySpend) || isNaN(monthsPaid) || isNaN(extraTraffic) || isNaN(conversionRate) || isNaN(averageOrderValue)) {
            alert("Please fill in all fields correctly.");
            return;
        }

        const conversions = extraTraffic * conversionRate;
        const netAdditionalMonthlyRevenue = conversions * averageOrderValue;
        const monthlyROI = ((netAdditionalMonthlyRevenue - monthlySpend) / monthlySpend) * 100;
        const totalSpendToDate = monthlySpend * monthsPaid;
        const totalRevenueGeneratedToDate = netAdditionalMonthlyRevenue * monthsPaid;
        const totalROI = ((totalRevenueGeneratedToDate - totalSpendToDate) / totalSpendToDate) * 100;

        $('#conversions').text(conversions.toFixed(2));
        $('#monthlyRevenue').text(netAdditionalMonthlyRevenue.toFixed(2));
        $('#monthlyROI').text(monthlyROI.toFixed(2));
        $('#totalSpend').text(totalSpendToDate.toFixed(2));
        $('#totalRevenue').text(totalRevenueGeneratedToDate.toFixed(2));
        $('#totalROI').text(totalROI.toFixed(2));
    });
});
w