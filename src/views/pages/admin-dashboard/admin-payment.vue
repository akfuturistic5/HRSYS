<template>
    <div class="table-responsive">
        <table class="table custom-table table-nowrap mb-0">
            <thead>
                <tr>
                    <th>Invoice ID</th>
                    <th>Client</th>
                    <th>Payment Type</th>
                    <th>Paid Date</th>
                    <th>Paid Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in AdminPayments" :key="item.id">
                    <td><router-link to="invoice-view">{{item.InvoiceID}}</router-link></td>
                    <td>
                        <h2><a href="javascript:;">{{item.Client}}</a></h2>
                    </td>
                    <td>{{item.PaymentType}}</td>
                    <td>{{item.PaidDate}}</td>
                    <td>{{item.PaidAmount}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AdminPayments from '@/assets/json/admin-payments.json'
export default {
    data() {
        return {
            AdminPayments: AdminPayments,
        }
    },
}
</script>