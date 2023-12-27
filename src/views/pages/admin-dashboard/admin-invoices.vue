<template>
    <div class="table-responsive">
        <table class="table table-nowrap custom-table mb-0">
            <thead>
                <tr>
                    <th>Invoice ID</th>
                    <th>Client</th>
                    <th>Due Date</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in AdminInvoices" :key="item.id">
                    <td><router-link to="invoice-view">{{ item.InvoiceID }}</router-link></td>
                    <td>
                        <h2><a href="javascript:;">{{ item.Client }}</a></h2>
                    </td>
                    <td>{{ item.DueDate }}</td>
                    <td>{{ item.Total }}</td>
                    <td>
                        <span :class="item.Class">{{ item.Status }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AdminInvoices from '@/assets/json/admin-invoices.json'
export default {
    data() {
        return {
            AdminInvoices: AdminInvoices,
        }
    },
}
</script>